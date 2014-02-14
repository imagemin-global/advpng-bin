# [node-advpng-bin](https://npmjs.org/package/advpng-bin)

## About

[advpng](http://advancemame.sourceforge.net/doc-advpng.html) node.js wrapper that optimize PNG images.

> The main purpose of this utility is to recompress png files to get the smallest possible size.
> Please note that this utility is not able to read a generic file. It's granted to be able to read only the files generated by the AdvanceMAME emulator.

[![Build Status](https://travis-ci.org/1000ch/node-advpng-bin.png?branch=master)](https://travis-ci.org/1000ch/node-advpng-bin)
[![NPM version](https://badge.fury.io/js/advpng-bin.png)](http://badge.fury.io/js/advpng-bin)
[![Dependency Status](https://david-dm.org/1000ch/node-advpng-bin.png)](https://david-dm.org/1000ch/node-advpng-bin)
[![devDependency Status](https://david-dm.org/1000ch/node-advpng-bin/dev-status.png)](https://david-dm.org/1000ch/node-advpng-bin#info=devDependencies)

[![NPM](https://nodei.co/npm/advpng-bin.png)](https://nodei.co/npm/advpng-bin/)

## Install

```sh
$ npm install -g advpng-bin
```

## Usage with Node.js

```js
var execFile = require('child_process').execFile;
var advpngPath = require('advpng-bin').path;

execFile(advpngPath, ['--recompress', '--shrink-extra', 'dest.png'], function() {
  console.log('Image minified');
});
```

## License

This is MIT.
[advpng](http://advancemame.sourceforge.net/doc-advpng.html) is licensed under GNU General Public License (GPL).