var config = {
    apiKey: "AIzaSyDBHdbjYz55pUYkfE5ucXoA19hXhRQ-eQk",
    authDomain: "dsc-ttu.firebaseapp.com",
    databaseURL: "https://dsc-ttu.firebaseio.com",
    projectId: "dsc-ttu",
    storageBucket: "dsc-ttu.appspot.com",
    messagingSenderId: "12781291860"
};
firebase.initializeApp(config);

let messagesRef = firebase.database().ref('messages');

document.getElementById('mailform').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    let email = getInputVal('email');
    saveMessage(email);
    console.log("Awesome!");
    document.querySelector('.alert').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 5000);
    document.getElementById('mailform').reset();

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email
    });
}
