async function getContent() {
  try {
    const response = await fetch('http://localhost:3110/')
    // console.log(response)

    const data = await response.json()
    let users = data.data
    //console.log(users)

    show(users)
    //
  } catch (error) {
    console.error(error)
  }
}

getContent()

function show(users) {
  let output = ''

  for (let user of users) {
    //console.log(user)
    output += `
    
    
    <a href="https://wellingtonokabayashi.github.io/${user.name}"><h4>${user.name}</h4> </a>`
  }

  let api = document.querySelector('#content')

  //console.log(api)
  api.innerHTML = output
}
