# fbi-template-webpack-demo
Webpack Demo template for fbi

### Clone
```bash
$ git clone git@github.com:neikvon/fbi-template-webpack-demo.git
```

### install dependencies
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
you can add other tasks

### Add to fbi template
```bash
$ fbi atm webpack-demo
```

### Check
```bash
$ fbi ls


# output:

# Tasks:

#  b, build        <template>
#  c, clean        <template>
#  s, serve        <template>
#  w, watch        <template>
#  b, build        <local>
#  c, clean        <local>
#  s, serve        <local>
#  w, watch        <local>

# Templates:

#  webpack-demo
```

## Reuse
```bash
$ cd path/to/other/folder
$ fbi init webpack-demo
```
you can use all the template tasks now.
