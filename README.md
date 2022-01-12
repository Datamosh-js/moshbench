# Moshbench

A CLI tool for prototyping new Datamosh modes. 

## What the heck is a Datamosh?

https://github.com/Datamosh-js/datamosh

## Usage

Clone, edit, run!

### Clone

Clone the moshbench-cli repo.

### Edit

Edit `mosh.js`, found in the root of the project. This will be the code you use for your new Datamosh mode. 

Starter code has been provided. As long as your mode *returns an array of numbers* [0,254], Datamosh will cover the rest.

```js
module.exports = function (data, width, height) {
  // manipulate data here

  for (let i = 0; i < data.length; i += 4) {
    // red = data[i]
    // green = data[i + 1]
    // blue = data[i + 2]
    // alpha = data[i + 3]

    // exmaple: red-shift image
    data[i + 1] = 0
    data[i + 2] = 0
  }

  return data
}
```

### Run

Run your new mode using Moshbench! 

### `mosh <readPath> <writePath>`

All you need is an image (and it's path) you wish to apply your new mode to.

For example:
```sh
$ chmod +x ./moshbench.js # allow exec
$ ./moshbench.js mosh ~/path/to/my/image.jpg ~/path/to/my/moshed-image.jpg
```
