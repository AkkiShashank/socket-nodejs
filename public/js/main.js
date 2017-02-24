
var socket = io("http://firsttestnode.herokuapp.com");

var user=""

socket.on("disconnect", function() {
    setTitle("Disconnected");
});

socket.on("connect", function() {
    setTitle("Connected to Cyber Chat");
});

socket.on("message", function(user,message) {
    printMessage(user,message);
});

document.forms[1].onsubmit = function () {
    var input = document.getElementById("message");
    if(user!=""){
    printMessage(user,input.value);
    socket.emit("chat", user,input.value);
    input.value = '';
    }else{
        alert("Please enter your username ")
    }
};
document.forms[0].onsubmit = function () {
    var input = document.getElementById("username");
    user=input.value
    
    console.log("username:",user)
    
    if (user!="") {
        document.getElementById("username").style.display="none";
    };
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(user,message) {
    var p = document.createElement("p");
    if(user!=""){
        p.innerText = user+":"+message;
    }else{
        p.innerText = message;
    }
    
    document.querySelector("div.messages").appendChild(p);
}