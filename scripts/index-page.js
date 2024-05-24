// ELEMENT REFERENCES ----------------------------------------------
const form = document.querySelector(".new-comment__form")
const userProfilePic = document.querySelector(".new-comment__profile-pic")
const nameInput = document.getElementById("name-input")
const commentInput = document.getElementById("comment-textarea")
const formSubmitBtn = document.getElementById("comment-submit")
const commentsContainer = document.querySelector(".comments__container")


// GLOBAL VARIABLES ------------------------------------------------
let commentsArr = [
    {
        user: "Victor Pinto",
        date: "11/02/2023",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        user: "Christina Cabrera",
        date: "10/28/2023",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        user: "Isaac Tadesse",
        date: "10/20/2023",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]


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
    commentUser.textContent = comment.user;
    commentBody.appendChild(commentUser);

    const commentDate = document.createElement("p");
    commentDate.classList.add("comment__date");
    commentDate.textContent = comment.date;
    commentBody.appendChild(commentDate);

    const commentComment = document.createElement("p");
    commentComment.classList.add("comment__comment");
    commentComment.textContent = comment.comment;
    commentBody.appendChild(commentComment);
}


function renderAllComments() {
    for (let i = 0; i < commentsArr.length; i++) {
        renderComment(commentsArr[i]);
    }
}

renderAllComments();
// renderAllComments2();