// Code for jack5079.github.io/yo-mama/

let jokes = { // The joke list
  fat: [ // Fat jokes
    {
      joke: 'not even Ninja could carry her in Fortnite!',
      url: 'https://www.youtube.com/embed/g8jWF6P-8jY?start=19'
    },
    {
      joke: 'she doesn\'t fit in a yo mama video...',
      url: 'https://www.youtube.com/embed/oXsTjVLKIUc?start=22'
    }
  ],
  stupid: [], // Stupid jokes
  hot: [ // Hot jokes
    {
      joke: 'she makes the sun sweat!',
      url: 'https://www.youtube.com/embed/NO-W-STrARA?start=44'
    }
  ],
  ugly: [] // Ugly jokes
}

Object.keys(jokes).forEach(name => { // For every joke category
  let button = document.createElement('button') // Make a button element
  button.innerText = name.charAt(0).toUpperCase() + name.slice(1) // Make the name of the button the category name but the first letter is uppercase
  button.onclick = function () { // Add the onclick event
    let jokeHolder = document.createElement('div') // Create the holder element
    let yomama = jokes[name][Math.floor(Math.random() * jokes[name].length)] //  yomama is the joke object

    let title = document.createElement('h2')
    title.innerText = `Yo mama so ${name}, ${yomama.joke}`
    jokeHolder.appendChild(title)
    if (yomama.hasOwnProperty('url')) { // If the url is there
      let video = document.createElement('iframe')

      video.src = yomama.url

      video.allowFullscreen = true
      video.frameBorder = '0'
      video.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      video.width = '560'
      video.height = '315'

      jokeHolder.appendChild(video)
    }
  }
  document.body.appendChild(button) // Add it to the body
})
