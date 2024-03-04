// Chiedo il nome
const userName = prompt ('Il tuo nome');
// Chiedo il cognome
const userSurname = prompt ('Il tuo cognome');
// Chiedo il colore preferito
const userFavColor = prompt ('Il tuo colore preferito');
// Bonus
const userNumber = prompt ('In tuo numero preferito');
const userNumberAsNumeric = parseInt(userNumber);
const num23 = 23;
// Creo la password
const numPassword = userNumberAsNumeric + num23;
const userPassword = userName + userSurname + userFavColor + numPassword;
// Creo il messaggio
const userMessage = 'La tua password è: ' + userPassword;
// Stampo il messaggio con la password
document.getElementById ('password').innerHTML = userMessage;