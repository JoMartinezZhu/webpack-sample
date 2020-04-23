module.exports = class MyWebpackPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        console.log("MyWebpackPlugin apply");
        compiler.hooks.shouldEmit.tap("MyPlugin", (compilation) => {
            console.log("shouldEmit");
            return true;
        });

        compiler.hooks.emit.tap("MyPlugin", (compilation) => {
            console.log("emit");
        });

        compiler.hooks.afterEmit.tap("MyPlugin", (compilation) => {
            console.log("afterEmit");
        });

        compiler.hooks.assetEmitted.tap("MyPlugin", (file, content) => {
            console.log("assetEmitted", file, content);
        });
    }
};
