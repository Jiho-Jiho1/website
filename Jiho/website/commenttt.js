// Firebase Config Begins =========
var firebaseConfig = {
  apiKey: "AIzaSyBJINHWpNWKCDCi1jYbBA0bCSexlOdlwCM",
  authDomain: "website-comments-35d41.firebaseapp.com",
  projectId: "website-comments-35d41",
  storageBucket: "website-comments-35d41.appspot.com",
  messagingSenderId: "150093268460",
  appId: "1:150093268460:web:0c53e061ac371513b96cc9",
  measurementId: "G-ZHP9W8T6EZ"
  };
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  // Firebase Config Ends ===========
  
  
  const root = document.getElementById("commenttt");
  root.setAttribute("style", "width: 100%; box-sizing: border-box; padding: 20px; height: 600px; border: 1px #888 solid; display: flex; flex-direction: column; justify-content: space-between;")
  
  root.innerHTML = `
    <h2>Comments</h2>
    <div id="commenttt-all-comments" style="flex: 1; overflow: scroll; background-color: #f7f7f7; margin-bottom: 20px;"></div>
    <div id="commenttt-form" style="display: flex; justify-content: space-between; align-items: center; height: 70px;">
      <input id="commenttt-name-field" type="text" placeholder="Who are you?" style="flex: 0.5; height: 75%; margin-right: 10px; font-size: 1.4rem">
      <input id="commenttt-content-field" type="text" placeholder="Leave your comment here!" style="flex: 4; height: 75%; margin-right: 10px; font-size: 1.4rem">
      <button id="commenttt-btn" style="flex: 2; height: 80%;">SEND</button>
    </div>
  `;
  const commentContainer = document.getElementById("commenttt-all-comments");
  
  
  
  function renderSingleComment(author, content, like, i) {

    like_num = 0;
    if(like !== undefined)
      like_num = like
    return `
  <div style="display: flex; width: 100%; border-left: 5px #bbb solid; margin: 30px; padding-left: 10px; box-sizing: border-box">
    <div style="width: 150px; font-weight: bold;">${author}</div>
    <div style="color: #666; margin-left: 10px">${content}</div>
    <div style="color: #666; margin-left: 10px">${like_num}</div>
    <button id="like-comment-${i}">
      <img src="/website/like.png" style="width: 40px; height: 40px;">
    </button>
  </div>
  `
  }
  
  function renderComments(allComments) {
    let commentsDom = "";
    allComments.forEach((c, i) => {
      commentsDom += renderSingleComment(c.author, c.content, c.like, i)
    })
    return commentsDom;
  }
  
  db.collection("comment").doc("comment").onSnapshot((doc) => {
    commentContainer.innerHTML = renderComments(doc.data().allComments);
    doc.data().allComments.forEach((c, i) => {
      document.getElementById(`like-comment-${i}`).onclick = () => {
        let commentDoc = db.collection("comment").doc("comment");
        commentDoc.update({
          allComments: doc.data().allComments.map((c, idx) => {
            if(i !== idx) return c;
            if(c.like === undefined) {
              c.like = 1
            }
            else {
              c.like++;
            }
            return c;
          })
        })
      }
    })
    commentContainer.scrollTop = commentContainer.scrollHeight;
  })
  
  const submitBtn = document.getElementById("commenttt-btn");
  const nameField = document.getElementById("commenttt-name-field")
  const contentField = document.getElementById("commenttt-content-field")
  function onSubmit() {
    var commentDoc = db.collection("comment").doc("comment");
    commentDoc.update({
      allComments: firebase.firestore.FieldValue.arrayUnion({
        author: nameField.value,
        content: contentField.value,
        like: 0
      })
    });
    nameField.value = ""
    contentField.value = ""
  }
  submitBtn.onclick = onSubmit;