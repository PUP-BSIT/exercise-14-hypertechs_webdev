function addComment() {
  let name = document.getElementById("name").value;
  let commentText = document.getElementById("comment").value;

  if (name.trim() === "" || commentText.trim() === "") {
    alert("Please fill out both fields.");
    return;
  }

  let commentList = document.getElementById("comment_list");
  let newComment = document.createElement("div");
  newComment.classList.add("comment-container");

  let userIcon = document.createElement("img");
  userIcon.src = "images/user_icon.jpg";
  userIcon.alt = "User Icon";
  userIcon.className = "user-icon";

  let commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");

  let nameElement = document.createElement("strong");
  nameElement.textContent = name;

  // Add date and time
  let timestamp = new Date();
  let dateTimeElement = document.createElement("span");
  dateTimeElement.className = "comment-timestamp";
  dateTimeElement.setAttribute("data-timestamp", timestamp.toISOString()); // Use ISO format for sorting
  dateTimeElement.textContent = timestamp.toLocaleString(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  let commentElement = document.createElement("p");
  commentElement.textContent = commentText;

  commentContent.appendChild(nameElement);
  commentContent.appendChild(dateTimeElement);
  commentContent.appendChild(commentElement);

  newComment.appendChild(userIcon);
  newComment.appendChild(commentContent);

  commentList.prepend(newComment);

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}

// Function to sort comments
function sortComments(order) {
  let commentList = document.getElementById("comment_list");
  let comments = Array.from(commentList.children);

  comments.sort((a, b) => {
    let timestampA = new Date(
      a.querySelector(".comment-timestamp").getAttribute("data-timestamp")
    );
    let timestampB = new Date(
      b.querySelector(".comment-timestamp").getAttribute("data-timestamp")
    );

    if (order === "asc") {
      return timestampA - timestampB;
    } else {
      return timestampB - timestampA;
    }
  });

  commentList.innerHTML = "";
  comments.forEach((comment) => commentList.appendChild(comment));
}
