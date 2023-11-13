function addComment() {
    let name = document.getElementById('name').value;
    let commentText = document.getElementById('comment').value;

    if (name.trim() === '' || commentText.trim() === '') {
        alert('Please fill out both the fields.');
        return;
    }

    let commentList = document.getElementById('comment_list');
    let newComment = document.createElement('div');
    newComment.classList.add('comment-container');

    let userIcon = document.createElement('img');
    userIcon.src = 'images/user_icon.jpg';
    userIcon.alt = 'User Icon';
    userIcon.className = 'user-icon';

    let commentContent = document.createElement('div');
    commentContent.classList.add('comment-content');

    let nameElement = document.createElement('strong');
    nameElement.textContent = name;
    let commentElement = document.createElement('p');
    commentElement.textContent = commentText;

    commentContent.appendChild(nameElement);
    commentContent.appendChild(commentElement);

    newComment.appendChild(userIcon);
    newComment.appendChild(commentContent);

    commentList.prepend(newComment);

    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}
