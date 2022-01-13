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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
          purpose :  "adding room name"
          });
          
          localStorage.setItem("room_name", Room_names);
    
          window.location = "kwitter_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          console.log("Room Name - " + room_name);
          row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoom Name(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
          });});}
    getData();
    
    
    function redirectToRoom(name)
    {
          console.log(name);
          localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
    }