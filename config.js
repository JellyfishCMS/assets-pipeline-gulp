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
  context: '../../jellyfish-themes/jellyfish-tests-gulp/',
                        // Where does your project is located?
                        // (relatively to the assets-pipeline-gulp folder)

  entry: {             // Where are the entry point files of your application?
    folder:  "src",
    styles:  "src/css/**/*.scss",
    scripts: "src/js/**/*.js",
    html:    "src/*.html",
    data:    "src/data/"
  },

  output: {            // Where do you want to generate output files?
    folder:  "dist",
    styles:  "dist/assets/styles/",
    scripts: "dist/assets/scripts/",
    html:    "dist/"
  }

  /**
  ** Plugins configuration
  ****************************/

}
