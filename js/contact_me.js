(function (window, document, $) {

  var config = {
    apiKey: "AIzaSyCpO6z-mu937PZOwD6S_nNTDmcSsW68QcE",
    authDomain: "wonderful-8035a.firebaseapp.com",
    databaseURL: "https://wonderful-8035a.firebaseio.com",
    projectId: "wonderful-8035a",
    storageBucket: "wonderful-8035a.appspot.com",
    messagingSenderId: "290153267893"
  };

  window.firebase.initializeApp(config);

  var database = window.firebase.database();
  var fields = [
    document.getElementById("name"),
    document.getElementById("email"),
    document.getElementById("phone"),
    document.getElementById("message"),
  ];

  $(function () {
    $("#contactForm *")
      .not("[type=submit]")
      .jqBootstrapValidation({
        submitSuccess: function ($form, event) {
          event.preventDefault();
          saveData();
        }
      });
  });

  function saveData() {

    var newMessage = {};

    fields.forEach(function (field) {
      newMessage[field.id] = field.value;
    });

    database
      .ref()
      .push(newMessage)
      .then(handleSuccess)
      .catch(handleError);
  }

  function handleSuccess() {
    var MESSAGE = 'Your message has been sent!';

    $("#contact-modal-message").text(MESSAGE);
    $("#contact-modal").modal("toggle");

    fields.forEach(function (field) {
      field.value = "";
    });
  }

  function handleError() {
    var MESSAGE = 'An Error occured and your message has not been sent!';

    $("#contact-modal-message").text(MESSAGE);
    $("#contact-modal").modal("toggle");
  }

})(window, document, $);