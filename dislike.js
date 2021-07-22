db.collection("dislike").doc("dislike").onSnapshot((doc) => {
    document.getElementById("dislikee").innerText=doc.data().dislike
  })

  document.getElementById("dislike").onclick=function(){
      db.collection("dislike").doc("dislike").update({
        dislike:firebase.firestore.FieldValue.increment(1)
      })
  }