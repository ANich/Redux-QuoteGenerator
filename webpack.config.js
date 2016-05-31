const webpack = require('webpack');
const fs = require('fs');
const path = require('path'),
      join = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

const root = resolve(__dirname);
const src = join(root, 'src');
const modules = join(root, 'node_modules');
const buildPath = join(root, 'build');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development'
const isTest = NODE_ENV === 'test';

var config = getConfig({
  isDev: isDev,
  in: join(src, 'index.js'),
  out: buildPath,
  clearBeforeBuild: true
});
if (isTest) {

  config.externals = {
   'react/lib/ReactContext': true,
   'react/lib/ExecutionEnvironment': true
  }

  config.plugins = config.plugins.filter(p => {
    const name = p.constructor.toString();
    const fnName = name.match(/^function (.*)\((.*\))/)

    const idx = [
      'DedupePlugin',
      'UglifyJsPlugin'
    ].indexOf(fnName[1]);
    return idx < 0;
  })
}

config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
])

const cssModuleNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

const matchCssLoaders = /(^|!)(css-loader)($|!)/;

const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l &&
      l.loader && l.loader.match(match));
  return found ? found[0] : null;
}

const cssloader = findLoader(config.module.loaders, matchCssLoaders);

const newloader = Object.assign({}, cssloader, {
  test: /\.module\.css$/,
  include: [src],
  loader: cssloader.loader
    .replace(matchCssLoaders,
    `$1$2?modules&localIdentName=${cssModuleNames}$3`)
})

config.module.loaders.push(newloader);
cssloader.test =
  new RegExp(`[^module]${cssloader.test.source}`)
cssloader.loader = newloader.loader;

config.module.loaders.push({
  test: /\.css$/,
  include: [modules],
  loader: 'styles!css'
})

module.exports = config;
