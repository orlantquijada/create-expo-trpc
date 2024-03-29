module.exports = function (api) {
  api.cache(true)
  // Make Expo Router run from `src/app` instead of `app`.
  // Path is relative to `/node_modules/expo-router`
  process.env.EXPO_ROUTER_APP_ROOT = "../../apps/expo/src/app"

  return {
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            "~": "./src",
            "@assets": "./assets",
          },
        },
      ],
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
    ],
    presets: ["babel-preset-expo"],
  }
}
