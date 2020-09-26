function SigIn(){

  console.log("call")
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        
        var user = result.user;
        console.log(user)
        console.log("user login====>",user.displayName)
        document.getElementById('log').setAttribute('style','display:none')
        document.getElementById('dlogin').removeAttribute('style')
        document.getElementById('img').src=user.photoURL
        document.getElementById('user').innerText =`User Name : ${user.displayName}`
        document.getElementById('email').innerText =`User Email : ${user.email}`
      
        
      }).catch(function(error) {
    
        var errorMessage = error.message;
        console.log('Error Message',errorMessage)
        document.getElementById('dlogin').setAttribute('style','display:none')
        document.getElementById('log').removeAttribute('style')

       
        
      });
}

function gSignIn(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
    console.log(user)


    document.getElementById('log').setAttribute('style','display:none')
    document.getElementById('dlogin').removeAttribute('style')
    document.getElementById('img').src=user.photoURL
    document.getElementById('user').innerText =`User Name : ${user.displayName}`
    document.getElementById('email').innerText =`User Email : ${user.email}`

  }).catch(function(error) {
    var errorMessage = error.message;
    console.log(errorMessage)
    document.getElementById('dlogin').setAttribute('style','display:none')
    document.getElementById('log').removeAttribute('style')

  });
}

function sigout(){
  firebase.auth().signOut()

   document.getElementById('dlogin').setAttribute('style','display:none')
    document.getElementById('log').removeAttribute('style')
  




}