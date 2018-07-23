var config = {
    apiKey: "AIzaSyCpO6z-mu937PZOwD6S_nNTDmcSsW68QcE",
    authDomain: "wonderful-8035a.firebaseapp.com",
    databaseURL: "https://wonderful-8035a.firebaseio.com",
    projectId: "wonderful-8035a",
    storageBucket: "wonderful-8035a.appspot.com",
    messagingSenderId: "290153267893"
  };

firebase.initializeApp(config);

var database = firebase.database();

$("#sendMessageButton").on("click", function(event) {
    event.preventDefault();
  
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
  
    var newMessage = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
  
    database.ref().push(newMessage);
  
    console.log(newMessage.name);
    console.log(newMessage.email);
    console.log(newMessage.phone);
    console.log(newMessage.message);
  
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#message").val("");
  });

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    var name = childSnapshot.val().name;
    var email = childSnapshot.val().email;
    var phone = childSnapshot.val().phone;
    var message = childSnapshot.val().message;
  
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);
});    

