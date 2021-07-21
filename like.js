db.collection("Likes_on_my_website").doc("Likes_on_my_website").onSnapshot((doc) => {
    document.getElementById("num").innerText=doc.data().Likes
  })

  document.getElementById("like").onclick=function(){
      db.collection("Likes_on_my_website").doc("Likes_on_my_website").update({
          Likes:firebase.firestore.FieldValue.increment(1)
      })
  }
