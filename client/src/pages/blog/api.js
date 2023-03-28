


const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("comment-list");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  const newComment = document.createElement("div");
  newComment.classList.add("comment");
  newComment.innerHTML = `<h3>${name}</h3><p>${comment}</p>`;

  commentList.appendChild(newComment);

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
});
