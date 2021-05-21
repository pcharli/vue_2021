module.export = {
    configureWebpack: {
        
    },
    pwa: {
        workboxPluginMode : "InjectManifest",
        workboxOptions: {
            swSrc: 'src/service-worker.js'
        }
    }
}