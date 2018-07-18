### Script tasks ###

# npm run prod - Automatized task - transpiling, compiling autoprefixing, minification(js) for now. 
# npm run dev - Development mode only difference it's unminified and dev server is configured.
 
 - Webpack dev server - it will automatically refresh the browser’s window as well, every time you change a file.

 - Configured babel to transpile to all 4 stages.
 
 - Configured sass loader to compile scss to css.

 - Added autoprefixer. 

 - Javascript minificaton and transpiled to es5.  
 
 - Using ESM.
 
 - Html webpack plugin which will automatically include bundled files into html template as minification of html. 
 

 @TODO: 
  Related to webpack enviroment.  
    Css minification. 
    File Loaders.
    Url loaders.
    PurgeCSS (tree shaking for css)
    Research  code spliting and async module loading and add to config in webpack.

 Linting
 Sharing work confguring ngrok localtunnel 
 Security checking for install node modules. ( - npm install -g nsp - add it as pre start script task.. )
 Create automated mock api data schema (user json-schema-faker)
 Configure json server and connect with json-schema-faker so it servers automatically mock data via json server when running dev build. Make npm task for that, and include in dev task.
 Research how to make automated testing in dev build.
 Make Continues integration.
 Research how to make error logging.
 Create final production build.
 Research and finalize production deploy steps.
