const {
    override,
    fixBabelImports,
    addLessLoader,
  } = require("customize-cra");
  
  
  module.exports = override( 
    fixBabelImports("babel-plugin-import", {
      libraryName: "antd-mobile",
      style: true
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#1DA57A" }
    })
  );