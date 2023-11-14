let nameField = document.getElementById("name");
let commentField = document.getElementById("comment");
let commentButton = document.getElementById("comment_button");
let comSection = document.getElementById("comment_section");
let sortOrder = 'desc'; //Default sort order
let commentQueue = [];

function enableCommentButton() {
    if (nameField.value != '' && commentField.value != '') {
        commentButton.disabled = false;
    } else {
        commentButton.disabled = true;
    }
}

let commentID = document.getElementById('comment_id');

function commentButtonClickHandler() {
    let commentContainer = document.createElement('p');
    commentContainer.innerHTML = `<p><strong>${nameField.value}: </strong>
        ${commentField.value}</p>`;
    commentID.append(commentContainer);
    nameField.value = "";
    commentField.value = "";
    commentButton.disabled = true;
}

commentButton.addEventListener("click", commentButtonClickHandler);