# Nuxt Web App.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt3.

# Index

1. [Pre-requisites](#pre-requisites)
2. [Project Setup](#project-setup)
3. [Running the Project](#running-the-project)
4. [A note for mac users](#special-note-for-mac-users)
5. [Generate Typescript Interfaces](#generate-typescript-interfaces-from-swagger)
6. [Debugging](#debugging)
7. [Issues Faced](https://ooud5deirh.larksuite.com/sheets/shtusgftucIXWWFHqxyZ7TUDcXb)
8. [Building the application](#building-the-application)

<br />

# Pre-requisites

## Install the following:

- [NodeJs](https://nodejs.org/en/download)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable). (**`Mac users`**, go through [this section](#running-on-macos))

<br />

## Why to choose **Yarn** over NPM?

- [Reference 1](https://www.imaginarycloud.com/blog/npm-vs-yarn-which-is-better/)
- [Reference 2](https://www.knowledgehut.com/blog/web-development/yarn-vs-npm)

<br>

# Project Setup

## Install the dependencies:

```bash
nvm use # This uses the node version mentioned in ".nvmrc" file.

yarn install # Installs all the packages mentioned in "package.json" file.
```

## To check for package updates:

```bash
yarn update # `update` script is mentioned in "package.json" file.
```

The original command to check package updates is:
```bash
yarn upgrade-interactive --latest
```

However, it is already included in the scripts section of [package.json](https://github.com/BunnyMan1/reach_disha_web/blob/main/package.json)

<br />

# Running the project

```bash
yarn dev -o
# or simply
yarn dev
```

Now launch http://localhost:3000

<br />

# Special Note for Mac Users

## Running on MacOS:

- Install nvm - https://github.com/nvm-sh/nvm#installing-and-updating or using homebrew
- Run `nvm use` in project root.
- Install yarn - `npm i -g yarn`
- Include below line in .zprofile, .zshrc, .bash_profile
     - export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
- Restart terminal session
- Run `yarn install`
- Run `yarn dev -o`

<br />

# Generate Typescript interfaces from Swagger:

- cd Downloads/
- npx openapi-typescript http://localhost:5000/swagger/v1/swagger.json --output reach_disha.d.ts

> **NOTE:** If you get error while generating typescript interfaces from swagger, Update your node version & openapi-typescript version.

<br />

# Debugging

While debugging in mobile devices, ensure that you enter the http://`youripaddress`:3000 not http://localhost:3000 in the device.

And in `nuxt.config.ts`, the client and server address should be `youripaddress` instead of `localhost`.

## Debugging on Android phone

- Make sure you have chrome installed on your Android device.
- Enable developer option in it and `allow USB debugging`.
- Connect your mobile device to the laptop / computer with an USB.
- Open `chrome://inspect/#devices` on your laptop / computer's chrome.
- Under the Remote Target Section, you will find your device. You can inspect by click the `inspect` hyperlink under your device.

## Debugging on iPhone

- Refer to this [website](https://www.lifewire.com/activate-the-debug-console-in-safari-445798#:~:text=Connect%20Your%20iOS%20Device%20to%20Safari%20on%20a%20Mac&̌text=Select%20the%20Show%20Develop%20menu,debug%20console%20for%20that%20site) for detailed instructions of debugging setup in iPhone.

<br />

# Building the Application

## Production

Build the application for production:

```bash
yarn run build
```

Locally preview production build:

```bash
yarn run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
