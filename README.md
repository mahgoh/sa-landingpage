# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       └── api/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

Any server side endpoints can be added in the `src/pages/api` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# Set up Pocketbase

## Step 1: Install PocketBase

PocketBase is a lightweight backend for web applications. You can use it to persist user data like signups, messages, etc.

Download PocketBase:
Go to the [PocketBase Releases page](https://github.com/pocketbase/pocketbase/releases) and download the appropriate version for your operating system.

## Step 2: Run PocketBase locally

Once downloaded, you can start the PocketBase server by running the following command:

```sh
./pocketbase serve
```

By default, PocketBase runs on http://127.0.0.1:8090. You can now access the admin panel at http://127.0.0.1:8090/_/ and set up your collections.

## Step 3: Set up PocketBase Admin

1. Open http://127.0.0.1:8090/_/ in your browser.
2. Create an admin user by following the instructions on the screen.
3. Once logged in, create a new collection to store user data (e.g., signups).
4. Go to Collections → Create Collection and name it (e.g., signups).
5. Add the following fields to the collection:
   1. email: text
   2. postalcode: text
   3. path: text
6. Go to Edit Collection → API Rules and make sure that Create Rules are open for everyone

## Step 3: Integrate PocketBase in Astro

In your Astro project, you’ll need to install PocketBase’s JavaScript client:

```sh
npm install pocketbase
```
