# Assets pipeline with **Gulp**

Gulp is a [node.js](https://nodejs.org/en/) **task manager** dedicated to _front-end development_. Ultimately, you will create an automated workflow that will simplify and improve you development process. To achieve that goal you will use gulp, a powerful toolkit to define tasks and sequence of tasks that you wish to be automated.

Hopefully, this repository is a set of pre-programmed gulp task. It is also a good way to learn how to create you personal configuration.

The repository contain a tutorial divided in several stage each one of the is stored in a separated branch on github. Start the configuration from the stage you need and learn more advance concepts on each stage.

* [Stage 0:  The gulpfile](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage0.md)
  * Use Gulp to setup you project
  * Commented Gulpfile `gulpfile.babel.js`
  * command line -> `npm run base`
* [Stage 1: plugins](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage1.md)
  * Use Gulp to process JavaScript, Css, images, and Sass
  * Commented Gulpfile `gulpfile.babel.js`
  * command line -> `npm run base`
* [Stage 2: Dev Configuration](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage2.md)
  * Use gulp and browser-sync to process your files and update you app as you code.
  * Commented Gulpfile `gulpfile.babel.js`
  * command line -> `npm run dev`
* [Stage 3: Build Configuration](https://github.com/JellyfishCMS/assets-pipeline-webpack/blob/master/documentation/stage3.md)
  * Publish you assets optimize for production (optimization)
  * Commented Gulpfile `gulpfile.babel.js`
  * command line -> `npm run build`

## Settup

Open `config.js` and define the global configuration according to you project

```shell
npm i
```

## features & Command lines

This configuration can:
  * Bundle JavaScript files
  * Automatically install and save your missing dependencies

Here is the list of script you can run:

| CLI | Implemented at | Description |
|--|--|--|
|`npm run base`  | [Stage 0] | Publish you JavaScript file(s) taking into account the dependencies|
|`npm run build` | [Stage 1] | Publish your assets to be ready in production|
|`npm run dev`   | [Stage 2] | Run the development server and activate the Hot module replacement (HRM)|

## Conventions

* `webpack.conf` folder contains our different configurations
  * We are using a `config.js` file to define some global variable for our Webpack configuration.
  * All configuration use `webpack.base.js` and programmatically modify the **JavaScript Object** he provides.
  * `webpack.default.js` contain a boilerplate to start a new configuration
* `webpack.mod` folder contains our loaders/plugins configurations
  * `default-loader.js` contain a commented boilerplate to start a new configuration

## Create our own configuration

* `webpack.default.js` contain a boilerplate to start a new Webpack configuration
* `default-loader.js` contain a commented boilerplate to start a new loader configuration
