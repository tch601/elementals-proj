const BASE_URL = "http://localhost:8000";

module.exports = {
  devServer: {
    proxy: {
      "/stories": {
        target: BASE_URL,
        changeOrigin: true,
      },
      "/seasons": {
        target: BASE_URL,
        changeOrigin: true,
      },
      "/episodes": {
        target: BASE_URL,
        changeOrigin: true,
      },
    },
  },
};
