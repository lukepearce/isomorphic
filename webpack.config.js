// var path = require( "path" );

// module.exports = {
//   context: path.join( __dirname, "public", "js" ),
//   entry: "app.jsx",
//   output: {
//     path: path.join(__dirname, "public", "js"),
//     filename: "bundle.js"
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel'
//       }
//     ]
//   }
// };

var path = require("path");

module.exports = [{
  context: path.join(__dirname, "public", "js"),
  entry: "app",
  output: {
    path: path.join(__dirname, "public", "js"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "babel"}
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ["", ".js", ".jsx"],
    root: [path.join(__dirname, "public", "js")],
    modulesDirectories: ["node_modules"]
  }
}];