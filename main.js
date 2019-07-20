/*
The jokes are from the Yo Mama channel
*/

  let jokes = window.fetch('jokes.json').then(r => r.json()) // Get the jokes

  let m = function (a) { // This function returns the maker function so I don't need to copy paste my changes to every one
    return function () { // Return the function
      let element = document.createElement('div') // Create the holder element
      try {
        let yomama = jokes[a][Math.floor(Math.random() * jokes[a].length)] //  yomama is the joke object
        let joke = document.createElement('h2') // Create the joke element
        joke.innerText = yomama.joke // Change its text to a random fat joke
        element.appendChild(joke) // Add the joke element to the holder

        let embed = document.createElement('iframe')
        embed.src = yomama.url // Set the URL to the yo mama joke's url
        embed.width = '560' // Set the width to the correct amount
        embed.height = '315' // Set the height to the correct amount
        embed.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' // Give it the right permissions
        embed.frameBorder = 0 // Remove the border
        element.appendChild(embed) // Add the video to the holder
      } catch {
        element.innerHTML = '<h2>There\'s no yo mama jokes for that category. Sorry!</h2>'
      }
      document.body.appendChild(element) // Add the holder to the body
    }
  }

  Object.keys(jokes).forEach((name) => { // For every joke category
    let button = document.createElement('button') // Make a button element
    button.innerText = name.charAt(0).toUpperCase() + name.slice(1) // Make the name of the button the category name but the first letter is uppercase
    button.onclick = m(name) // Add the onclick event
    document.body.appendChild(button) // Add it to the body
  })
