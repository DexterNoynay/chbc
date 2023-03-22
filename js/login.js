// JavaScript Document

//Allowed User Credentials
var allowedUser = 
	[
		{
			username : "admin",
			password : "admin"
		},
		{
			username : "user",
			password : "user"
		}
	]
var json = JSON.stringify(allowedUser);

//Check if user exists when login button is clicked
function checkUser(e) {
	event.preventDefault()
	
	var username = document.getElementById("login-name").value;
	var password = document.getElementById("login-password").value;
	var storedUser = JSON.parse(json);
	
	if ((username !== "" && password !=="") || (username !== null && password !== null) || (username !== undefined && password !== undefined)) {
		for (i = 0; i < storedUser.length; i++) {
			if (username === storedUser[i].username && password === storedUser[i].password) {
				sessionStorage.setItem("username",username);
				sessionStorage.setItem("password",password);
				$("#login-container").css("display", "none");
			}else {
				document.getElementById("login-result").style.animation = "resultFadeOut 3s ease-in";
				document.getElementById("login-result").innerHTML = "INVALID!";
				document.getElementById("login-name").value = "";
				document.getElementById("login-password").value = "";
				setTimeout(function(){
					document.getElementById("login-result").style.animation = "none";
				},3000);
			}
		}
	}
}

//Check if User has Logged-in
$(document).ready(function(){
  if (sessionStorage.length != 0) {
	  $("#login-container").css("display", "none");
  }	
});