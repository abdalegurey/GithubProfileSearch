let searchbtn = document.querySelector("#search-btn");
let search =document.querySelector("#search");
let profiledisplay= document.querySelector(".profile-display");
let savedprofiletitle = document.querySelector(".saved-profile-title")
//let profileinfo= document.querySelector(".profile-info")


savedprofiletitle.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href="displayGithub.html"

})


searchbtn.addEventListener("click", async function() {
    let username = search.value;

    if(search.value === ""){
        alert("Please enter a username");
        return;
    }

    let url =`https://api.github.com/users/${username}`;

    try{
        let response= await fetch(url)
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
        if(search.value.trim() !== ''){
        let object={
            name: data.name,
            bio: data.bio,
            avatar_url: data.avatar_url,
            followers: data.followers,
            following: data.following,
          
        }

        addGithubTotheDom(object);
        search.value ='';

    }
    }
    catch(error){
        console.error("Error:", error);
    }

})

function addGithubTotheDom(data){
    profiledisplay.innerHTML=`
      <div class="profile-info">
                    <img src="${data.avatar_url}" alt="" width="170px" height="170px">
                    <div class="name">username: ${data.username}</div>
                    <div class="bio">Bio:${data.bio}</div>
                    
                    <div class="email">Email: ${data.email}</div>
                    <div class="followers">Followers:${data.followers}</div>
                    <div class="following">Following: ${data.following}</div>
                    <button type="submit" id="save">save</button>
                  
                   
                </div> 
    
    
    
    `

    AddLocalstorage(data,profiledisplay)

}

function AddLocalstorage(data,profileinfo){
    console.log(profileinfo)

    let save= profiledisplay.querySelector("#save");
    
  save.addEventListener("click",function(){
      let olddata= JSON.parse(localStorage.getItem('github')) || [];
     console.log(olddata)
      olddata.push(data);
      localStorage.setItem('github', JSON.stringify(olddata));
   
      alert("Saved Successfully a github profile")

  })

}





