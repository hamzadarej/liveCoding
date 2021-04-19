## Project Boilerplate 

An HTML CSS boilerplate with built-in sass support:

- Automatic [Sass](https://sass-lang.com/) transpilation
- Development server powered by [live-server](https://www.npmjs.com/package/live-server) with automatic reload
- Deployments to github pages with [gh-pages](https://www.npmjs.com/package/gh-pages)



## Get Started

- [Setup](#setup)
- [Useful Commands](#useful-commands)
- [Build it from scratch](#from-scratch)
- [Project Structure](#project-structure)



## Setup

1. Clone this repository into a new project folder (replace `[project name]` with your project's name)

   ```
   git clone git@github.com:Fbw-48/project-boilerplate-scss.git [project name]
   ```

1. Delete the boilerplate's git history to ensure that the project history only includes your commits

   ```
   cd <project name>
   rm -rf .git
   ```

1. Edit `package.json` to add you project's name

   `package.json`

   ```json
   {
     "name": "[project name]",
     ...
     "author": "[your name]"
   }
   ```

1. Edit `src/index.html` to add your projects name

   ```html
   ...
   <head>
     ...
     <title>[project name]</title>
   </head>
   ...
   ```

1. Start a new git repository and make an initial commit. This will make sure that you can work on your project with git.

   ```
   git init
   git add . && git commit -m "Initial commit"
   ```

1. Install the dependencies

   ```
   npm install
   ```

1. Happy coding ☘️ 

## Useful Commands

### Development

Run **live-server** and **sass** in **watch** mode and start coding!

```
npm start
```

### Production

Transpile sass and copy relevant files from **src** to **dist** to prepare your website for **deployment**.

```
npm run build
```

### Deploy to Github Pages

Deploy your code to **Github Pages**: this script creates a 'gh-pages' branch and publishes the **dist** folder. For this to work, make sure you already have a remote repository on github.

```
npm run deploy
```

## From Scratch 

 if you want to start from scratch you need 
 
## initialise npm in your project 
```bash
npm init -y
```
## install some Dev-Dependencies
```bash
npm i --save-dev gh-pages sass npm-run-all live-server
```

## add some scripts to your `package.json`
```bash
"scripts": {
    "start": "run-p watch watch:styles",
    "build": "run-s clean clean:styles build:styles copy",
    "deploy": "run-s build publish",
    "build:styles": "sass src/scss:src/styles",
    "watch": "live-server src",
    "watch:styles": "sass src/scss:src/styles --watch",
    "clean": "rm -rf dist",
    "clean:styles": "rm -rf src/styles",
    "copy": "mkdir dist && rsync -avr --exclude=\"/scss\" src/ dist",
    "publish": "gh-pages -d dist"
  },
```

## Project Structure

Any project created with this boilerplate will follow the structure below:

```
Project
│   README.md
│   package.json
|   package-lock.json
└───src
│   │   index.html
│   └───styles
|   └───scss
|   |   |  _var.scss
|   |   |  _header.scss
|   |   └───main.scss
│   └───scripts
│   |   └───index.js
|   └───img
|   └───fonts
└───dist
```

### `README.md`

The README should contain a brief description of your project, feel free to delete this guide or rename it to add your own description.

### `package.json` & `package-lock.json`

These files contain various information about you, your project and the project dependencies, as well as useful scripts to help you with the development process. Please do not edit these files for the time being, except where you're asked to. In the future, you will learn more about project dependencies.

### `src` & `index.html`

The `src` folder contains any file you would want to add to your website before any processing is done to it. **This is the main folder you will be working in**.

`index.html` is the main page for your website which you will be working on. Feel free to add any new `html` pages you create directly in the `src` folder.

### `scripts` & `index.js`

The `scripts` folder will contain any `js` files you will add to your website. `index.js` is the _**main**_ script file of your project. Feel free to use this file to add any JavaScript that you want to experiment with. You will learn more about JavaScript in the browser very soon 😉.

### `scss` & `main.scss`

The `scss` folder will contain any `scss`. In order to include additional styles in your project, you must import them to `main.scss`.

`main.scss` is your style _**entry point**_. Any other `scss`  imported to this file can be used, and any styles written directly to this file will be applied.

### `images` and `fonts`

For the sake of organization and good project structure practices, please use these folders in order to keep your images and fonts respectively.

### `dist`

The `dist` folder will be automatically generated whenever your run the build script:

```bash
npm run build
```

This folder will contain your built project, ready to be deployed online. It is excluded from `git` tracking since it is not customary to include compiled code in a development project.


 

