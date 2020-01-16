/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const newCard = document.querySelector(".cards");
axios
.get('https://api.github.com/users/kaverndsp')
.then(response => {
  const data = response.data;
  const info = drawCard(data);
  newCard.append(info);
  })
  .catch(error => {
    console.log("There was an Error. ", error);
  })

// .catch(error => {
//   console.log("There was an error. ", error);
// });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
;
function drawCard(github){
  const newCard = document.createElement('div');
  const newCardImg = document.createElement('img');
  const newDiv = document.createElement('div');
  const newName = document.createElement('h3');
  const newUsername = document.createElement('p');
  const newLocation = document.createElement('p');
  const newProfile = document.createElement('p');
  const newAddress = document.createElement('a');
  const newFollower = document.createElement('p');
  const newFollowing = document.createElement('p');
  const newBio = document.createElement('p');

  newCard.append(newCardImg);
  newCard.append(newDiv);
  newDiv.append(newName);
  newDiv.append(newUsername);
  newDiv.append(newLocation);
  newDiv.append(newProfile);
  newProfile.append(newAddress);
  newDiv.append(newFollower);
  newDiv.append(newFollowing);
  newDiv.append(newBio);

  newCard.classList.add('card');
  newDiv.classList.add('card-info');
  newName.classList.add('name');
  newUsername.classList.add('username');

  newCardImg.src = github.avatar_url;
  newName.textContent = github.name;
  newUsername.textContent = github.login;
  newLocation.textContent = github.location;
  newAddress.textContent = github.url;
  newFollower.textContent = github.followers;
  newFollowing.textContent = github.following;
  newBio.textContent = github.bio;


  return newCard;

}



