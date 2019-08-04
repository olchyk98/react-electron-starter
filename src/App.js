import React, { Component } from 'react';

/*
*  Good news!
*  You are not able to use import sys stuff here, because all-system-stuff is not available in the browser
*  Like: import { ircRenderer } from 'electron'
*
*  But, anyway, you're still able to use packages
*  such as fs and electron through window._require_ function
*
*  More about electron/preload.js file:
*  Details: https://github.com/electron/electron/issues/9920#issuecomment-336757899
*/

// App
class App extends Component {
    iroute = async () => {
        // Copy
        await navigator.clipboard.writeText('https://github.com/olchyk98/react-electron-starter/issues')
        // Alert
        alert("Issues page URL was successfully copied to clipboard!");
    }

    render() {
        return(
            <>
                <h1>Hello, Developer! How are you doing?</h1>
                <mark>Edit this title in <strong>src/App.js</strong> file</mark>
                <br />
                <mark>You can edit main process behaviour in <strong>electron/start.js</strong> file</mark>
                <p>If I made a mistake in the starter, please, </p>
                <p>Please, <button style={{ color: "blue" }} onClick={ this.iroute }>Contact me</button> if you see that I made a mistake in the starter</p>
            </>
        )
    }
}

export default App;
