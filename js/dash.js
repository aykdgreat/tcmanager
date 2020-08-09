var deleteAcct = document.getElementById('delete');

if (localStorage.username != undefined) {
	var greetUser = document.getElementById('greetUser');
	var greetPass = document.getElementById('greetPass');
	greetUser.innerHTML = "Welcome to your dashboard, <b>" + localStorage.username + "</b>, we trust that you're doing well. Stay safe";
	//greetPass.innerHTML = "Your pin is <b>" + localStorage.password + "</b>";
	deleteAcct.addEventListener('click', function() {
		if (confirm('It pains us to see you go, sure to continue?')) {
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		}
	});
} else {
	deleteAcct.style.display = "";
	document.write('You are not logged in');
}