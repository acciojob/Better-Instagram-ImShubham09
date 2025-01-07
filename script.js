//your code here
// Variable to store the ID of the dragged element
let draggedElement = null;

// Add event listeners to all draggable elements
const images = document.querySelectorAll(".image");

images.forEach((image) => {
  // Drag start
  image.addEventListener("dragstart", (event) => {
    draggedElement = event.target; // Store the dragged element
    event.target.classList.add("selected"); // Highlight the dragged element
  });

  // Drag end
  image.addEventListener("dragend", (event) => {
    event.target.classList.remove("selected"); // Remove the highlight
    draggedElement = null; // Clear the dragged element reference
  });

  // Drag over
  image.addEventListener("dragover", (event) => {
    event.preventDefault(); // Allow drop by preventing default behavior
  });

  // Drop
  image.addEventListener("drop", (event) => {
    event.preventDefault();

    // Swap the content of the dragged element and the target element
    if (draggedElement && draggedElement !== event.target) {
      const tempContent = draggedElement.innerHTML;
      draggedElement.innerHTML = event.target.innerHTML;
      event.target.innerHTML = tempContent;

      // Swap the background styles
      const tempBackground = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = event.target.style.backgroundImage;
      event.target.style.backgroundImage = tempBackground;
    }
  });
});
