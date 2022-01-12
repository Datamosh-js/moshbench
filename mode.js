module.exports = function (data, width, height) {
  // manipulate data here

  for (let i = 0; i < data.length; i += 4) {
    // red = data[i]
    // green = data[i + 1]
    // blue = data[i + 2]
    // alpha = data[i + 3]

    data[i + 1] = 0
    data[i + 2] = 0
  }

  return data
}
