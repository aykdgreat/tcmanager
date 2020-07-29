var userName = document.getElementById('username');
var passWord = document.getElementById('password');
var login = document.getElementById('SignUp');
login.addEventListener('submit', function() {
	localStorage.username = userName.value;
	localStorage.password = passWord.value;
})
function validate() {
	if (userName.value == localStorage.username) {
		event.preventDefault();
		passWord.value = localStorage.password;
		alert('User already exist, Login instead');
	}
}