/*
The jokes are from the Yo Mama channel
*/
(async function () {
  let jokefile = await window.fetch('jokes.json') // Get the joke file
  let jokes = await jokefile.json() // Convert the jokes to JSON

  let addjoke = function (category) { // This function returns the maker function so I don't need to copy paste my changes to every one
    return function () { // Return the function
      let element = document.createElement('div') // Create the holder element
      let yomama = jokes[category][Math.floor(Math.random() * jokes[category].length)] //  yomama is the joke object
      element.innerHTML = `
      <h2>${yomama.joke}</h2>
      <iframe src="${yomama.url}" width="560" height="315" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameborder="0"></iframe>
      `
    }
  }

  Object.keys(jokes).forEach(name => { // For every joke category
    let button = document.createElement('button') // Make a button element
    button.innerText = name.charAt(0).toUpperCase() + name.slice(1) // Make the name of the button the category name but the first letter is uppercase
    button.onclick = addjoke(name) // Add the onclick event
    document.body.appendChild(button) // Add it to the body
  })
})()
