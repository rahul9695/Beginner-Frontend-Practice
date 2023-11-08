document.addEventListener("DOMContentLoaded", function () {
    const inputArea = document.getElementById("inputArea");
    const colorInput = document.querySelector("input[type=color]");
    const addNoteButton = document.querySelector("#color-container button");
    const notesContainer = document.getElementById("notes-container");
    const noNotesMessage = document.createElement("p");
    noNotesMessage.textContent = "You haven't added any notes yet.";
  
    noNotesMessage.style.display = "block"; // Show the message initially
    notesContainer.appendChild(noNotesMessage);
  
    addNoteButton.addEventListener("click", function () {
      const noteText = inputArea.value.trim();
      const noteColor = colorInput.value;
  
      if (noteText) {
        createNote(noteText, noteColor);
        inputArea.value = "";
        noNotesMessage.style.display = "none"; // Hide the message when notes are added
        notesContainer.style.display = "flex";
        notesContainer.style.flexWrap = "wrap";
      }else{
        alert("Input is Empty! Please add some text to add notes");
      }
    });
  
    function createNote(text, color) {
      const note = document.createElement("div");
      note.className = "note";
      note.style.backgroundColor = color;
  
      const noteText = document.createElement("div");
      noteText.className = "note-text";
      noteText.contentEditable = true;
      noteText.textContent = text;
  
      // Determine the text color based on the background color's brightness
      const brightness = calculateBrightness(color);
      if (brightness < 128) {
        noteText.style.color = "white"; // Use white text on dark backgrounds
      } else {
        noteText.style.color = "black"; // Use black text on light backgrounds
      }
  
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "Delete";
  
      deleteButton.addEventListener("click", function () {
        notesContainer.removeChild(note);
        if (notesContainer.children.length === 1) {
          noNotesMessage.style.display = "block";
          notesContainer.style.display = "block";
        }
      });
  
      note.appendChild(noteText);
      note.appendChild(deleteButton);
      notesContainer.appendChild(note);
    }
  
    function calculateBrightness(color) {
      // Convert the color to RGB components
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
  
      // Calculate brightness using the formula
      return (0.299 * r + 0.587 * g + 0.114 * b);
    }
  });