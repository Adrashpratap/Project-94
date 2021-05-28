//firbase code
var firebaseConfig = {
    apiKey: "AIzaSyAXV32qT31nkvfAdzLvw3YEXY45ctKUMvA",
    authDomain: "project---94-213f4.firebaseapp.com",
    databaseURL: "https://project---94-213f4-default-rtdb.firebaseio.com",
    projectId: "project---94-213f4",
    storageBucket: "project---94-213f4.appspot.com",
    messagingSenderId: "744389143447",
    appId: "1:744389143447:web:6003c71eeb415cd5f3b2d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//firebase complete
function logout()
{
    localStorage.removeItem("User name");
    window.location = "i.html";
}
function addroom()
{
    user_name = document.getElementById("input_2").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Adding user"
    });

    localStorage.setItem("room name",user_name);
}