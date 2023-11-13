let buttonComment = document.getElementById ("button_comment"),
  formCommentText = document.getElementById ("form_comment_text"),
  formCommentName = document.getElementById ("form_comment_name"), 
  formComment     = document.querySelector ("#form_comment");

buttonComment.addEventListener ("click", addComment);
formCommentName.addEventListener ("input", enableButton);
formCommentText.addEventListener ("input", enableButton);

function enableButton () {
  buttonComment.disabled = (formCommentName.value.length < 1 || 
    formCommentText.value.length < 1) ? true : false; 
}

function addComment () {
  let commentName = document.createElement ("p"),
    commentText   = document.createElement ("p");

  commentName.classList.add ("comment-name");
  commentText.classList.add ("comment-text");
  commentName.innerHTML = formCommentName.value + " said:";
  commentText.innerHTML = formCommentText.value;
  formComment.before (commentName);   
  formComment.before (commentText);   
  formCommentText.value = "";
  formCommentName.value = "";
  buttonComment.disabled = true;
}
