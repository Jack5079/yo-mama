/*
The jokes are from the Yo Mama channel
*/
let jokes = { // The joke list
  fat: [ // Fat jokes
    {
      joke: 'Yo mama so fat, not even Ninja could carry her in Fortnite!',
      url: 'https://www.youtube.com/embed/g8jWF6P-8jY?start=19'
    },
    {
      joke: 'Yo mama so fat, she doesn\'t fit in a yo mama video...',
      url: 'https://www.youtube.com/embed/oXsTjVLKIUc?start=22'
    }
  ],
  stupid: [], // Stupid jokes
  hot: [ // Hot jokes
    {
      joke: 'Yo mama so hot, she makes the sun sweat!',
      url: 'https://www.youtube.com/embed/NO-W-STrARA?start=44'
    }
  ],
  ugly: [] // Ugly jokes
}
let addjoke = function (category) { // This function returns the maker function so I don't need to copy paste my changes to every one
  return function () { // Return the function
    let element = document.createElement('div') // Create the holder element
    let yomama = jokes[category][Math.floor(Math.random() * jokes[category].length)] //  yomama is the joke object
    element.innerHTML = `
      <h2>${yomama.joke}</h2>
      <iframe src="${yomama.url}" width="560" height="315" frameborder="0"></iframe>
      `
  }
}

Object.keys(jokes).forEach(name => { // For every joke category
  let button = document.createElement('button') // Make a button element
  button.innerText = name.charAt(0).toUpperCase() + name.slice(1) // Make the name of the button the category name but the first letter is uppercase
  button.onclick = addjoke(name) // Add the onclick event
  document.body.appendChild(button) // Add it to the body
})
