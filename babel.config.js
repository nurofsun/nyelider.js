module.exports = function(api) {
    api.cache(true);
    let presets, plugins;
    presets = ['@babel/preset-env', 'minify']
    plugins = []
    return {
        presets,
        plugins
    }
}
