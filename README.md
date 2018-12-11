# Respresso Vue demo.

## Configuration

In *respresso.json* you can customize:
- projectToken: Change it to you project's token
- targetDirectory: optional, defaults to *respresso*
- resources: only import what you need and you can change the version number, too

## Include resources into your web application

To start using Respresso in your app takes almost zero time and effort. After configuring your Respresso project, just issue `npm run sync` and you can start using the resources.

### Localization

This demo uses [vue-i18n](https://github.com/kazupon/vue-i18n), so you can find all relevant info there. Respresso files are imported in *src/i18n.js*.

### SASS

This demo uses *style-resources-loader* so you can access the color definitions in every scss files. You can find a demo in *src/App.vue*.

### Images

Find a sample use of svg in *src/App.vue*.

### Fonts

TBD


## Project setup
```
npm install
```

## Synchronize from Respresso server
```
npm run sync
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
