# A simple password generator

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e86b541-e4e0-450a-811f-b6645dc36c52/deploy-status)](https://app.netlify.com/sites/silly-panini-2c2f7f/deploys)

A simple password generator, you can run on the terminal with `getpass.js`, or in the browser with a React App.
I did used the `create-react-app` module so you may found some unnecessary files.

## Run in the browser

1. Go to the `createpass` folder
1. Run `npm i` to get the necessary node modules
1. Run `npm run build` to create a build solution
1. You can then go to the build folder and open the `index.html` file on your browser
1. Or, for example, you can also put it online with a serverless service like ~~_Now_~~ _Vercel_, or _Netlify_

   1. You can also use mine in https://silly-panini-2c2f7f.netlify.app

## Run in the terminal with NodeJS

## Requisites

- You need to have NodeJS installed

### How to use?

1. Open your terminal
1. Run `node getpass.js`

### Options

By default 6 passwords will be generated with 16 characters, you can execute the file with 2 arguments:

> `node getpass.js <number of characters> <number of passwords>`

Example:

`node .\getpass.js 4 2`

2 Password(s) were created with 4 characters:
48yk
7rKz

### Notes

Be free to test it or comment at anytime. This was a simple test app that I made to play with React and to have something simple that could help me generate simple, or complex, strings!

Have fun!
