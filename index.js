// Code your solutions in this file
// Function to return thank you messages
function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
  }
  
  // Function to count down to zero
  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Export the functions if needed (depending on your setup)
  module.exports = {
    writeCards,
    countDown
  };