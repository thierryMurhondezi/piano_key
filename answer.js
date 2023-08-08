function changeColor(event) {
    const key = event.target;
    key.style.backgroundColor = 'red'; // Change the color to your desired color
  
    // Reset the color after a delay of 500 milliseconds (adjust as needed)
    setTimeout(function() {
      key.style.backgroundColor = ''; // Reset to default color
    }, 500);
  }
  
  // Add event listeners to each key
  notes.forEach(function(note) {
    note.addEventListener('click', changeColor);
  });