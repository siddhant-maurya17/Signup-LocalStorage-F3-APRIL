const nameSpan = document.querySelector('#name');
const emailSpan = document.querySelector('#email');
const password=document.querySelector('#password');
const logoutButton = document.querySelector('#logout-btn');

// check if user is logged in
const user = JSON.parse(localStorage.getItem('user'));
if (!user || !user.accessToken) {
	window.location.href = 'index.html';
} else {
	nameSpan.textContent = `Full Name : ${user.name}`;
	emailSpan.textContent = `Email : ${user.email}`;
    password.textContent=`Password : ${user.password}`;
}

// handle logout button click
logoutButton.addEventListener('click', function() {
	// remove user data from local storage
	localStorage.removeItem('user');
	// redirect to signup page
	window.location.href = 'index.html';
});





