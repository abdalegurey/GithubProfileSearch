let profilesection= document.querySelector(".profile-section");
let clear = document.querySelector("#clear");
let Back = document.querySelector("#Back");




document.addEventListener('DOMContentLoaded',function() {
    let githubprofiles= JSON.parse(localStorage.getItem('github')) || []
    console.log(githubprofiles);
    if(githubprofiles.length === 0){
      

        document.querySelector(".paragraph").textContent='Not found'
    }
    
    else if(githubprofiles.length !== 0){
        githubprofiles.forEach(element => {
            profilesection.innerHTML+=`
            <div class="profile-info">
                    <img src="${element.avatar_url}" alt="" width="170px" height="170px">
                    <div class="name">username: ${element.username}</div>
                    <div class="bio">Bio:${element.bio}</div>
                    
                    <div class="email">Email: ${element.email}</div>
                    <div class="followers">Followers:${element.followers}</div>
                    <div class="following">Following: ${element.following}</div>
                  
                   
                </div>
            
            `
            
        });


    }
  

});



