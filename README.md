# Lupus Decoupled Nuxt 3 Demo

A demo setup with naked skeleton components for https://www.drupal.org/project/lupus_decoupled
The setup is mostly built upon the [drupal-ce connector](https://github.com/drunomics/nuxtjs-drupal-ce) Nuxt module.

## Overview

This is simply a new Nuxt 3 project with https://github.com/drunomics/nuxtjs-drupal-ce installed and configured.

## Try it

* [Launch it with Lupus Decoupled](https://gitpod.io/new/#DP_PROJECT_NAME=lupus_decoupled,DP_ISSUE_BRANCH=1.x,DP_PROJECT_TYPE=project_module,DP_MODULE_VERSION=1.x,DP_PATCH_FILE=,FRONTEND_REPOSITORY=https%3A%2F%2Fgithub.com%2Fdrunomics%2Flupus-decoupled-nuxt3-demo,CUSTOM_ELEMENTS_VERSION=3.*,DP_INSTALL_PROFILE=standard/https://github.com/drunomics/lupus-decoupled-project/tree/main) on Gitpod.io OR

* [Launch it on StackBlitz](https://stackblitz.com/fork/github/drunomics/lupus-decoupled-nuxt3-demo/tree/main?file=nuxt.config.ts) and connect it to a backend (see manual setup steps).

### Manual setup steps

For stackblitz or local setup you'll get some network error until base URLs are set right. To do so:

1. Set the Drupal base URL in `nuxt.config.ts`, e.g. `https://8080-shaal-drupalpod-8m3z0ms7mb6.ws-eu67.gitpod.io`
   When using a Drupal gitpod/DrupalPod as a backend, make sure to set your environment to "Shared" via the workspace options menu, as found in the dashboard at https://gitpod.io. That way the frontend can connect to it.
2. Set the frontend base URL in Drupal at `/admin/config/system/lupus-decoupled/settings`, e.g. `https://nuxt-starter-wuxxcy--3000.local-corp.webcontainer.io`
3. Test it. Best add some content nodes and some menu-items pointing to them. /node/1 of the backend is available under /node/1 in the frontend. You should see some naked frontend with menus, breadcrumbs & basic node-content (body field) working.

## Usage

### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

Add all [initial scaffold files](https://github.com/drunomics/nuxtjs-drupal-ce/tree/2.x/playground):

npm run init-project-files

### Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## Development

For quick development with a running backend, the following command may be used to point it against a pantheon
lupus-decoupled demo site:

   npm install
   NUXT_PUBLIC_DRUPAL_CE_DRUPAL_BASE_URL=https://dev-lupus-decoupled-test.pantheonsite.io npm run dev
