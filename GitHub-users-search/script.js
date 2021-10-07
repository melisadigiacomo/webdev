var form = document.getElementById("myform");

//Callback function will hold the object
form.addEventListener("submit", function(event){
    event.preventDefault();

    //Extract value
    var search = document.getElementById("search").value;

    //Remove possible spaces in the search
    var newSearch = search.split(" ").join("");

    //Fetch users from GitHub API
    //Configure the Promises that fetch returns

    //For avatar
    fetch("https://api.github.com/users/" + newSearch)
    .then((avatar) => avatar.json())
    .then((data) => {
        //console.log(data); //to check
        document.getElementById("avatar").innerHTML = `
        <a target="_blank" href="https://www.github.com/${newSearch}"><img src="${data.avatar_url}"/></a>
        `;
    })

    //For username
    fetch("https://api.github.com/users/" + newSearch)
    .then((username) => username.json())
    .then((data) => {
        document.getElementById("username").innerHTML = `
        <a target="_blank" href="https://www.github.com/${newSearch}"><h3>${data.login}</h3></a>
        `;
    })

})