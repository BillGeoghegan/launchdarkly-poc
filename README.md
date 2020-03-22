## LaunchDarkly POC

This is to showcase how we may use launchdarkly in a JS application.

It makes 2 checks.

One is a built in property for what country the user is in. We pass this using an IP to country API. It will check if the user is in Ireland and provide the feature. If the user is in Spain, it will provide the feature to 50% of users. If the user is in any other country, it will not work.

The second check is to prove that we can easily add our own custom properties. I've added an 'over25' property which can be changed in code. This will disable the flag, if a user is not over 25.

### Start with `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Testing this functionality

You can use a VPN to force your client to not meet the rules I've set in launch-darkly.

You can, alternatively, just change the `endUserSettings` object properties in `App.js`. Both options work just fine!
