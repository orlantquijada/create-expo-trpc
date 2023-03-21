module.exports = function (api) {
  api.cache(true)
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
    ],
    presets: ["babel-preset-expo"],
  }
}
