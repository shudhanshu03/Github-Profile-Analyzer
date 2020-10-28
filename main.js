const form = document.getElementById("xyz");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const search = document.getElementById('search').value;

    const username = search.split(' ').join('');

    fetch("https://api.github.com/users/"+username)
    .then((res)=>res.json())
    .then((data)=>{
 
         document.getElementById('result').innerHTML = `
           <div id="user">
           <img class="avatar" src="${data.avatar_url}"/>
           <div class="details">
           <h4> User Bio : ${data.bio}</h4>
           <br>
           <h4> Public Repo : ${data.public_repos} </h4>
           <br>
           <h4> Followers : ${data.followers}</h4>
           <br>
           <h4> Following : ${data.following}</h4>
           <br>
           <h4> Twitter Handle : ${data.twitter_username}</h4>
           </div>
           </div>
         `

    })
})