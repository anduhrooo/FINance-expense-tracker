// Get the modal element
let modal = document.getElementById("expenseModal");
// Get the button that opens the modal
let expenseBtn = document.getElementById("addExpense");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// Function to open the modal
function openModal(e) {
  // e.stopPropagation();
  modal.style.display = "block";
}
// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}
// Add event listener to open the modal when the button is clicked
expenseBtn.addEventListener("click", openModal);
// Add event listener to close the modal when the span is clicked
span.addEventListener("click", closeModal);
// Add event listener to close the modal when clicked outside of it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});
