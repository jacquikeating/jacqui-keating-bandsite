// IMPORT ----------------------------------------------------------
import api from './band-site-api.js'


// ELEMENT REFERENCES ----------------------------------------------
const form = document.querySelector(".new-comment__form")
const nameInput = document.getElementById("name-input")
const commentInput = document.getElementById("comment-textarea")
const commentsContainer = document.querySelector(".comments__container")


// GLOBAL VARIABLES ------------------------------------------------


// FUNCTIONS -------------------------------------------------------
function renderComment(comment) {
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    commentsContainer.appendChild(newComment);

    const profilePic = document.createElement("img");
    profilePic.classList.add("comment__profile-pic");
    profilePic.src = "/assets/images/avatar-placeholder.png";
    newComment.appendChild(profilePic);

    const commentBody = document.createElement("div");
    commentBody.classList.add("comment__body");
    newComment.appendChild(commentBody);

    const commentUser = document.createElement("p");
    commentUser.classList.add("comment__user");
    commentUser.textContent = comment.name;
    commentBody.appendChild(commentUser);

    const commentDate = document.createElement("p");
    commentDate.classList.add("comment__date");
    const timestampToDate = new Date(comment.timestamp).toLocaleDateString('en-US');
    commentDate.textContent = timestampToDate;
    commentBody.appendChild(commentDate);

    const commentComment = document.createElement("p");
    commentComment.classList.add("comment__comment");
    commentComment.textContent = comment.comment;
    commentBody.appendChild(commentComment);
}

async function renderAllComments() {
    commentsContainer.innerHTML = '';
    let commentsArr = await api.getComments();
    commentsArr.reverse();
    for (let i = 0; i < commentsArr.length; i++) {
        renderComment(commentsArr[i]);
    }  
}

// function createTimestamp() {
//     const d = new Date();
//     const month = d.getMonth() + 1;
//     const date = d.getDate();
//     const year = d.getFullYear();
//     return `${month}/${date}/${year}`;
// }


// EVENT LISTENERS -------------------------------------------------
form.addEventListener("submit", async function(e) {
    // 1. Prevent page refresh
    e.preventDefault();

    // 2. Store input values in an object and call createTimestamp() to automatically generate the date
    const newCommentData = {
        name: nameInput.value,
        comment: commentInput.value
    }

    // 3. PUSH comment to API
    await api.postComment(newCommentData);
    
    // 4. Clear input fields
    nameInput.value = '';
    commentInput.value = '';

    // 5. Render updated comments list
    renderAllComments();
})


// FUNCTION(S) TO CALL ON LOAD -------------------------------------
renderAllComments();