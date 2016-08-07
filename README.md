# fbi-template-webpack-demo
Webpack Demo template for [fbi-v2.x](https://github.com/neikvon/fbi)

## Introduction:

Simple scafford for web application

Features: es2015/2016(babel), webpack 2, postcss, static server(koa 2).

## Usage:

### First
```bash
$ npm i -g fbi
```
### Clone
```bash
$ git clone git@github.com:neikvon/fbi-template-webpack-demo.git
```

### Install dependencies locally
```bash
$ npm install
```

### Test
```bash
$ fbi b
```
```bash
$ fbi b -p
```
```bash
$ fbi w
```
```bash
$ fbi s
```
```bash
$ fbi c
```
You can add more tasks.

### Add to fbi templates
```bash
$ cd path/to/fbi-template-webpack-demo
$ fbi atm
```

### Check
```bash
$ fbi ls


# output:

# Tasks:

#  b, build        -t
#  c, clean        -t
#  s, serve        -t
#  w, watch        -t
#  b, build
#  c, clean
#  s, serve
#  w, watch

# Templates:

#  ★  webpack-demo <current> - Simple, es2015 + webpack + postcss.
```
Note:
- `empty` means local tasks.
- `-t` means template tasks;
- `-g` means global tasks;

You can specify a template task like `fbi [task] -t`

By the way, you can check the task content like `fbi cat [task] -t`

More help: `fbi -h`

## Reuse
```bash
$ cd path/to/other/folder
$ fbi init webpack-demo
```
you can use all the template tasks now.
