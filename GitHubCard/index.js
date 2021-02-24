/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

axios.get('https://api.github.com/users/Kotsumo')
  .then(res => {
    const gitCard = cardMethod(res.data)
    console.log(gitCard)
    cards.appendChild(gitCard)
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

  followersArray.forEach(gitUser => {
    axios.get(`https://api.github.com/users/${gitUser}`)
    .then(res => {
        const card = cardMethod(res.data)
        cards.appendChild(card)
        console.log(res.data)
      })
    .catch(err => {
      console.log(err);
    })
  })
  
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

//   avatar_url: "https://avatars.githubusercontent.com/u/21017673?v=4"
// bio: "Just a guy who has been trying to learn to make games on and off for 10 years. Life always gets in the way but I want to finally get something off the ground."
// blog: ""
// company: null
// created_at: "2016-08-14T05:49:25Z"
// email: null
// events_url: "https://api.github.com/users/Kotsumo/events{/privacy}"
// followers: 0
// followers_url: "https://api.github.com/users/Kotsumo/followers"
// following: 0
// following_url: "https://api.github.com/users/Kotsumo/following{/other_user}"
// gists_url: "https://api.github.com/users/Kotsumo/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/Kotsumo"
// id: 21017673
// location: "San Jose, CA"
// login: "Kotsumo"
// name: "David Ellis"
const cards = document.querySelector('.cards');

console.log(cards);

function cardMethod({avatar_url, bio, login, name, location, html_url, followers, following }){

  const cardDiv = document.createElement('div')
  const cardimg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUser = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')
  
  cardDiv.appendChild(cardimg)
  cardDiv.appendChild(cardInfo)
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(cardUser)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)

  cardDiv.classList.add('card')
  cardInfo.classList.add('card-info')
  cardName.classList.add('name')
  cardUser.classList.add('username')

  cardName.textContent = name
  cardUser.textContent = login
  cardLocation.textContent = location
  cardProfile.textContent = html_url
  cardFollowers.textContent = `followers ${followers}`
  cardFollowing.textContent = `following ${following}`
  cardBio.textContent = bio

  cardimg.src = avatar_url

  

  return cardDiv;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
