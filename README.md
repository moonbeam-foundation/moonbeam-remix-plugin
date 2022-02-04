![moonbeam](./public/Moonbeam_Logo_Final_500px.png)

# Moonbeam Plugin for Remix

The Moonbeam plugin for Ethereum's Remix IDE. It support for deploy and interacting on a Moonbeam network.

# Getting Started

First, clone the repository:

```
git clone https://github.com/PureStake/moonbeam-remix-plugin
cd moonbeam-remix-plugin
```

Install dependencies:

```
yarn install
```

Run the app:

```
yarn start
``` 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## View Local Changes on Remix

When developing the plugin, you can view the changes you're making locally from within Remix by taking the following steps:

1. From Remix, click on the **Plugin Manager** icon on the left side menu
2. Towards the top, click on **Connect to a Local Plugin**
3. Fill in the plugin details:

    - **Plugin Name** - Moonbeam Test Plugin
    - **Url** - http://localhost:3000
    - **Type of connection** - iframe
    - **Location in remix** - side panel
    
4. Click on **OK**
5. A question mark icon should appear on the left side menu for the local plugin

Once the local plugin has been created, you can navigate to it test out your changes!

## Publish Changes

To publish changes to the live plugin, all you have to do is run `yarn publish-pages` and commit the updated build files!

## How to Use the Plugin

1. Click RemixIDE Plugin Manager Icon and activate Moonbeam Plugin
2. Click Moonbeam Plugin Icon
3. Connect MetaMask Wallet Account
4. Select Network
5. Compile your smart contract
6. Select Contract to deploy
7. Deploy

