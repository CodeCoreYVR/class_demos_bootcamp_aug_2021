const path = require("path")
module.exports = {
    mode: "development",
    // Then entry is the file where webpack begins to bundle your files
    // you can specify a path to an "entry" file in multiple ways:
    // single entry
    // entry: "./src/a.js"'
    // for multiple entry files bundle into one file, use an array
    // entry: ["./src/a.js", "./src/b.js"]
    // To create multiple bundles from separate entry files, use an object
    entry: {
        client: "./src/index.js",
        ajs: "./src/a.js",
        bjs: "./src/b.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|webp|svg)$/,
                loader: "file-loader",
                options: {
                    outputPath: "images/",
                    name: '[name].[ext]'
                }
            }
        ]
    }
}