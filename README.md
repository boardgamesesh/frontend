# Boardgame Sesh

Helping boardgame enthusiasts seamlessly organise their one-time & recurring boardgame sessions so that you can forget about the work and get back to boardgaming.

## Getting Started

### Install dependencies

We use [pnpm](https://pnpm.io/) on this project

```bash
pnpm install
```

### Run in development mode

```bash
pnpm dev
```

## Understanding the repo

### /app

There are 3 distinct groups (directories) setup in our `app` directory:

1. (app): All pages that users interact with to organise their boardgame sessions, typically need authentication to access.
2. (workflows): Workflows provide a focused and step-by-step user experience which guides users to achieve a task.
3. (marketing): Dedicated pages for things like the landing page which are open to the public to view.

Each one of these groups have their own top level `layout.tsx` to facilitate their specific user experience (eg. different navigations) and any directories under these groups are routes.

### /components

Re-usable components composed of multiple other components. Generally these facilitatet specific design patterns to be used for BGS, typically made up of Honeycomb (our internal design system) components.

### /packages

Any generic code which can be published for external uses.

### /lib

Anything that is an interface to an external library, or is a library in it self, which contains BGS specific configuration.

## The pipeline

- Continuous Integration: [Github Actions workflows](https://github.com/boardgamesesh/app/tree/main/.github/workflows) to ensure a fast (and free) feedback loops on our PR's
- Continuous Deployment: [Netlify](https://www.netlify.com/)

## Contributing

- If something on the UI **doesn't work**: [submit and issue](https://github.com/boardgamesesh/app/issues/new?assignees=&labels=&template=bug_report.md&title=).
- For everything else, [submit a discussion](https://github.com/boardgamesesh/app/discussions/new/choose).
