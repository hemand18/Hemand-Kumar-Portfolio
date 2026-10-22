# Hemand Kumar — Portfolio

A responsive, single-page portfolio built with React and Vite.

## Run locally

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

## Build for production

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. The portfolio content and links
are defined in `src/App.jsx`; the existing responsive styles are in
`style.css`.

## Publish on GitHub Pages

Build the app with `npm run build` and publish the generated `dist/` directory.
For a project page served from a repository subpath, configure Vite's `base`
option to match that path before building.
