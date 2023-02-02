# Lupus Decoupled Nuxt.js Demo

A demo setup for testing https://www.drupal.org/project/lupus_decoupled

## Overview

This is simply a new Nuxt 3 project with https://github.com/drunomics/nuxtjs-drupal-ce installed and configured.

## Try it

* [Launch it on StackBlitz](https://stackblitz.com/fork/github/drunomics/lupus-decoupled-nuxt3-demo?file=nuxt.config.ts)

* Or clone the repo and launch it locally.

## Manual setup steps

For stackblitz or local setup you'll get some network error until base URLs are set right. To do so:

1. Set the Drupal base URL in `nuxt.config.ts` and append the API-prefix /ce-api, e.g. `https://8080-shaal-drupalpod-8m3z0ms7mb6.ws-eu67.gitpod.io/ce-api`
   When using a Drupal gitpod/DrupalPod as a backend, make sure to set your environment to "Shared" via the workspace options menu, as found in the dashhboard at https://gitpod.io. That way the frontend can connect to it.
3. Set the frontend base URL in Drupal at `/admin/config/system/lupus-decoupled/settings`, e.g. `https://nuxt-starter-wuxxcy--3000.local-corp.webcontainer.io`
4. Test it. Best add some content nodes and some menu-items pointing to them. /node/1 of the backend is available under /node/1 in the frontend. You should see some naked frontend with menus, breadcrumbs & basic node-content (body field) working.


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
