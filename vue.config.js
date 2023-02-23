const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    open: true,
    proxy: {
        '/api': { 
            target: "https://shouldersfoundationtw.org/framework/",
            changeOrigin: true,
            pathRewrite: {
                '^/api': "" 
            }
        }
    }
}
})
