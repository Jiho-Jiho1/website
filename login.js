db.collection("login").doc("login").onSnapshot((doc) => {
    document.getElementById("login").innerText=doc.data().login
  })

  document.getElementById("login").onclick=function(){
      db.collection("login").doc("login").update({
          login:firebase.firestore.FieldValue.increment(1)
      })
  }