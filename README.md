

# React Electron Starter 🌈
React Electron Starter is a simple and fast way to start writing Node.js Electron code.

## Benefits 🎈
- It doesn't require any configuration
- It doesn't have 2000+ files in the project
- Everything that is going with 'create-react-app' tool is available for you. Hot updates, syntax recommendations, SASS support.
- You control every aspect of your Electron/React application. It's not a problem to system modules in your application.
- Your Electron and React parts of the project are able even to communicate through eventEmittor (ipcRenderer/ipcMain)

## How to start 🎬
#### Clone the Github repository:

    git clone https://github.com/olchyk98/react-electron-starter

#### Install all React/Electron dependencies:

    yarn
or if you're using NPM

    npm install

#### Run your app in **dev mode**:

    yarn start
    
  or if you're using NPM

    npm start

## About system imports in React ☎️
Actually, you can't just import system modules inside your React application in the way you always do. You should use the **_require_** function.

So, instead of this:

    import fs from 'fs'

You should write:

    const fs = window._require_('fs')

Anyhow, it's easy to use, right? 😇

---
Made with 💙 for people who're going to try Electron
