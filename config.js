const context = './' // Where does your project is located?
                     // (relatively to the assets-pipeline-gulp folder)

module.exports = {

  /**
  ** ENVIRONNEMENT VARIABLES
  ****************************/
  debug: process.env.NODE_ENV === 'development',
  port: 3003,          // which port to use when serving your files?
  target: 'web',       // What is the target of your application?

  /**
  ** APPLIATION I/O
  ****************************/
  entry: {             // Where are the entry point files of your application?
    styles:  context + "src/styles/**/*.scss",
    scripts: context + "src/styles/**/*.js",
    html:    context + "src/*.html",
    data:    context + "dataset/"
  },

  output: {            // Where do you want to generate output files?
    styles:  context + "dist/assets/styles/",
    scripts: context + "dist/assets/scripts/",
    html:    context + "dist/"
  }

  /**
  ** Plugins configuration
  ****************************/

}
