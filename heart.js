db.collection("hearts").doc("hearts").onSnapshot((doc) => {
    document.getElementById("heartss").innerText=doc.data().hearts
  })

  document.getElementById("hearts").onclick=function(){
      db.collection("hearts").doc("hearts").update({
          Likes:firebase.firestore.FieldValue.increment(1)
      })
  }