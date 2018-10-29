# A simple password generator

A simple password generator, you can run on the terminal with `getpass.js`, or in the browser with a React App.
I did used the `create-react-app` module so you may found some unnecessary files.

## Run in the browser

1. Go to the `create-pass` folder
1. Run `npm i` to get the necessary node modules
1. Run `npm run build` to create a build solution
1. You can then go to the build folder and open the `index.html` file on your browser
1. Or, for example, you can also put it online with a serverless service like _Now_

   1. You can also use mine in https://build-hhjjzrvzdf.now.sh/

## Run in the terminal with NodeJS

## Requisits

- You need to have NodeJS installed

### How to use?

1. Open your terminal
1. Run `node getpass.js`

### Options

By default 6 passwords will be generated with 16 characters, you can execute the file with 2 arguments:

> `node getpadd.js <number of characters> <number of passwords>`

Example:

```shell
node .\getpass.js 4 2

2 Password(s) were created with 4 characters:
48yk
7rKz
```

### Notes

Be free to test it or comment at anytime. This was a simple test app that I made because I wanted to play with React and I wanted to have something simple that could help me generate simple, or complex, strings!

Have fun!
