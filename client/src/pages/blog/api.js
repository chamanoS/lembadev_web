

// Get references to the comment form and comment list elements
const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("comment-list");

// Add a submit event listener to the comment form
commentForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the name and comment fields
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  // Create a new comment element
  const newComment = document.createElement("div");
  newComment.classList.add("comment");
  newComment.innerHTML = `<h3>${name}</h3><p>${comment}</p>`;

  // Add the new comment element to the comment list
  commentList.appendChild(newComment);

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
});
