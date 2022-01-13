// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD6eTOTi3C4El4e7CsZPquMaGjoK3c-OmA",
      authDomain: "kwitter-project-fa15c.firebaseapp.com",
      databaseURL: "https://kwitter-project-fa15c-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-fa15c",
      storageBucket: "kwitter-project-fa15c.appspot.com",
      messagingSenderId: "1053390637885",
      appId: "1:1053390637885:web:cc30ed1bcb610c2035d354"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() 
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}