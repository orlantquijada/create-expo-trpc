import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { TRPCProvider } from "~/utils/trpc"

export default function RootLayout() {
  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f472b6",
            },
          }}
        />
        <StatusBar />
      </SafeAreaProvider>
    </TRPCProvider>
  )
}
