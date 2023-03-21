import { FC, useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlashList } from "@shopify/flash-list"
import type { RouterOutputs } from "@acme/api"

import { trpc } from "~/utils/trpc"

const PostCard: FC<{
  post: RouterOutputs["post"]["all"][number]
}> = ({ post }) => {
  return (
    <View className="rounded-lg border border-gray-400 p-4">
      <Text className="text-xl text-gray-900">{post.title}</Text>
      <Text className="text-gray-400">{post.content}</Text>
    </View>
  )
}

const CreatePost: FC = () => {
  const utils = trpc.useContext()
  const { mutate } = trpc.post.create.useMutation({
    async onSuccess() {
      await utils.post.all.invalidate()
    },
    onError(e) {
      console.log(e.data)
    },
  })

  const [title, onChangeTitle] = useState("")
  const [content, onChangeContent] = useState("")

  return (
    <View className="flex flex-col border-t border-gray-400 py-4">
      <TextInput
        value={title}
        className="mb-2 rounded border border-gray-400 p-2 text-gray-900"
        onChangeText={onChangeTitle}
        placeholder="Title"
      />
      <TextInput
        value={content}
        className="mb-2 rounded border border-gray-400 p-2 text-gray-900"
        onChangeText={onChangeContent}
        placeholder="Content"
      />
      <TouchableOpacity
        // arbitrary values work!
        className="rounded bg-[#333] p-2"
        activeOpacity={0.8}
        onPress={() => {
          mutate({
            title,
            content,
          })
        }}
      >
        <Text className="font-semibold text-white">Publish post</Text>
      </TouchableOpacity>
    </View>
  )
}

export const HomeScreen = () => {
  const postQuery = trpc.post.all.useQuery()
  const [showPost, setShowPost] = useState<string | null>(null)

  return (
    <SafeAreaView>
      <View className="h-full w-full p-4">
        <View className="py-2">
          {showPost ? (
            <Text className="text-gray-900">
              <Text className="font-semibold">Selected post id: </Text>
              {showPost}
            </Text>
          ) : (
            <Text className="font-semibold italic text-gray-900">
              Press on a post
            </Text>
          )}
        </View>

        <FlashList
          data={postQuery.data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          contentContainerStyle={{ paddingBottom: 8 }}
          renderItem={(p) => (
            <TouchableOpacity
              onPress={() => setShowPost(p.item.id)}
              activeOpacity={0.6}
            >
              <PostCard post={p.item} />
            </TouchableOpacity>
          )}
        />

        <CreatePost />
      </View>
    </SafeAreaView>
  )
}
