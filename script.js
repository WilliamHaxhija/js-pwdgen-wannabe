// Chiedo il nome
const userName = prompt ('Il tuo nome');
// Chiedo il cognome
const userSurname = prompt ('Il tuo cognome');
// Chiedo il colore preferito
const userFavColor = prompt ('Il tuo colore preferito');
// Creo la password
const userPassword = userName + userSurname + userFavColor + 23;
// Creo il messaggio
const userMessage = 'La tua password è: ' + userPassword;
// Stampo il messaggio con la password
document.getElementById ('password').innerHTML = userMessage;