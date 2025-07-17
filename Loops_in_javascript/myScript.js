// function myFunction() {
//     var x,text;

//     let x= document.getElementById("numb").value;
//     if (isNaN (x) || x < 1 || x > 10);
//     text = "invalid input";
// }

 var database = [
    {
        username: "salisu",
        password: "adamu"
    },
    {
        username: "ahmad",
        password: "shanono"
    },
    {
        username: "fatima",
        password: "saidu"
    }
];

var newsfeed = [
    {
        username: "Tboy",
        timeline: "Javascript is hard"
    },
    {
        username: "John",
        timeline: "good morning"
    },
    {
        username: "David",
        timeline: "Happy new month"
    }
];



   

function isUserValid(username,password){
    for (var i = 0; i < database.length; i++){
 if(username === database [i].username && password === database [i].password){
        return true;
    }
  }
  {
    return false;
  }
   
}

function signIn (username,password){
    
 if(isUserValid (username,password)){
        console.log(newsfeed);
    } else {
        alert("wrong details");
    }
}

var usernamePrompt = prompt("enter username");
var passwordPrompt = prompt("enter password");



signIn(usernamePrompt,passwordPrompt);