# webpack2-long-term-cache

Long term cache playground of webpack 2

# Dependency

* webpack@^2.2.0-rc.3
* webpack-dev-server@^2.2.0-rc.0

# How to start

```bash
$ npm run build
```

It will run example 1-6 build one by one.
After build, you can checkout `example*/build/entry1.html` or `example*/build/entry2.html`

You can change `webpack.prod.config.js` to enable `BundleAnalyzerPlugin`,
and excute `npm run build:1` to see how webpack 2 make long term cache.

### example 1

original build

```bash
$ npm run build:1
```

### example 2

original build +
NamedModulesPlugin

```bash
$ npm run build:2
```

### example 3

original build +
recordsPath

```bash
$ npm run build:3
```

### example 4

original build +
NamedModulesPlugin +
recordsPath

```bash
$ npm run build:4
```

### example 5

original build +
HashedModuleIdsPlugin

```bash
$ npm run build:5
```

### example 6

original build +
HashedModuleIdsPlugin +
recordsPath

```bash
$ npm run build:6
```
