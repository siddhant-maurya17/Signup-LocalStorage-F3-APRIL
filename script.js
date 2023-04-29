let fName=document.querySelector("#fname");
let emailVal=document.querySelector("#email");
let password=document.querySelector("#password");
let confirmPass=document.querySelector("#confirm-password");
let errorMessage = document.querySelector('#error-message');
let successMessage = document.querySelector('#success-message');
function SignUp(){
    // let message=document.getElementById("message");
    if((password.value!=confirmPass.value)){
        
    }
    if((!fName.value || !emailVal.value|| !password.value || !confirmPass.value)){
        errorMessage.style.display = 'block';
		successMessage.style.display = 'none';
        // message.innerHTML=`<p class="new" >Hi</p>`;
	} 
    else {
		errorMessage.style.display = 'none';
		// generate access token
		const accessToken = generateAccessToken();
		// save user data to local storage
		const user = {
			name: fName.value,
			email: emailVal.value,
			password: password.value,
			accessToken: accessToken
		};
		localStorage.setItem('user', JSON.stringify(user));
		successMessage.style.display = 'block';
		// redirect to profile page
		setTimeout(function() {
			window.location.href = 'profile.html';
		}, 2000);
	}
};
function generateAccessToken() {
	const randomBytes = new Uint8Array(16);
	window.crypto.getRandomValues(randomBytes);
	const accessToken = Array.from(randomBytes).map(b => ('00' + b.toString(16)).slice(-2)).join('');
	return accessToken;
}
document.getElementById("signup-btn").addEventListener("click",SignUp);