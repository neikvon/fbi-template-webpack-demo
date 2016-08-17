# fbi-template-webpack2
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
$ git clone git@github.com:neikvon/fbi-template-webpack2.git
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
$ cd path/to/fbi-template-webpack2
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

#  ★  webpack2 <current> - Simple, es2015 + webpack + postcss.
```
Note:
- `empty` means local tasks.
- `-t` means template tasks;
- `-g` means global tasks;

You can specify a template task use `fbi [task] -t`

By the way, you can check the task content use `fbi cat [task] -t`

More help: `fbi -h`

## Reuse
```bash
$ cd path/to/other/folder
$ fbi init webpack2
```
you can use all the template tasks now.
