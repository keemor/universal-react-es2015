# Universal React with ES2015

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Universal React with ES2015](https://24ways.org/2015/universal-react) article - check it out.

[Demo universal-react-es2015.herokuapp.com](http://universal-react-es2015.herokuapp.com) 

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git://github.com/keemor/universal-react-es2015.git # or clone your own fork
$ cd universal-react-es2015
$ npm install
$ webpack --config webpack.config.js (--watch as an option)
$ babel-node server.js
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
