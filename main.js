async function getContent() {
  try {
    const repos = await fetch(
      'https://api.github.com/users/WellingtonOkabayashi/repos'
    )
    //console.log(repos)

    const data = await repos.json()
    let users = data
    console.log(users)

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
