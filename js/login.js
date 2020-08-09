
 var username = document.getElementById('username');
 var password = document.getElementById('password');
 var checkUser = document.getElementById('ourForm');
 var success = false;
 function validate(){
    if (username.value != localStorage.username){
        event.preventDefault();
        alert('User not found');
      } else if (username.value == localStorage.username && password.value != localStorage.password){
          event.preventDefault();
          alert('Password Incorrect');
          password.value = "";
        } else if (username.value == localStorage.username && password.value == localStorage.password){
            success = true;
          }
  }
   checkUser.addEventListener('submit', function goTo(){
     if(success){
       event.preventDefault();
       location.href = "dashboard.html";
     }
  })