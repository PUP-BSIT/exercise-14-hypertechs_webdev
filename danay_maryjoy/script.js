let nameField = document.getElementById("name");
let commentField = document.getElementById("comment");

function validate(){
    if(nameField.value.length > 2 && commentField.value.length > 2){
        document.getElementById("comment_button").disabled = false;
    } else{
        document.getElementById("comment_button").disabled = true;
    }
}

function commentButtonClickHandler() {
    let comSection = document.getElementById("comment_section");
    let commentHolder = document.createElement("p");
    commentHolder.innerHTML = ` <p><strong>${nameField.value}: </strong> 
        ${commentField.value}</p>`;
    comSection.append(commentHolder);
    nameField.value = "";
    commentField.value = "";
    document.getElementById("comment_button").disabled = true;
}

let commentBtn = document.getElementById("comment_button");
commentBtn.addEventListener("click", commentButtonClickHandler);