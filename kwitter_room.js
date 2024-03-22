
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDgN2JBufJfYYSUc8zkEPMd-9yTkHE4qhk",
  authDomain: "kwitter-2e821.firebaseapp.com",
  databaseURL: "https://kwitter-2e821-default-rtdb.firebaseio.com/",
  projectId: "kwitter-2e821",
  storageBucket: "kwitter-2e821.appspot.com",
  messagingSenderId: "741959934380",
  appId: "1:741959934380:web:3eac84de77c5dab2641a09"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Bienvenido " + user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
      console.log("Nombre de la sala" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Finaliza el código
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

        localStorage.setItem("room_name", room_name);
        //window.location = "kwitter_page.html"
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()  {
  localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}
