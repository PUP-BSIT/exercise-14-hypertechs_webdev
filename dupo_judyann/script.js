let nameField = document.getElementById('name');
let commentField = document.getElementById('comment');
let commentButton = document.getElementById('comment_button');

function enableCommentButton(){
    if (nameField.value != '' && commentField.value != '') {
        commentButton.disabled = false;
    } else {
        commentButton.disabled = true;
    }
}

let idComment = document.getElementById('id_comment');

function handleCommentButtonClick() {
    let commContainer = document.createElement('p');
    commContainer.innerHTML = `<p><strong>${nameField.value}:</strong>
    ${commentField.value}</p>`;
    idComment.append(commContainer);
    nameField.value = "";
    commentField.value = "";
    commentButton.disabled = true;
}

commentButton.addEventListener("click", handleCommentButtonClick);