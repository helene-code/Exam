

	class Profile {
		constructor(name, age, email, telephone) {
			this.name = name;
			this.age = age;
			this.email = email;
			this.telephone = telephone;
		}

		saveProfile() {
			localStorage.setItem('profile.name', this.name);
			localStorage.setItem('profile.age', this.age);
			localStorage.setItem('profile.email', this.email);
			localStorage.setItem('profile.telephone', this.telephone);
		}

		setProfile(n, a, e, t) {
			this.name = n;
			this.age = a;
			this.email = e;
			this.telephone = t;
			this.saveProfile();
		}

		getProfile() {
			document.forms['Login']['fName'].value = localStorage.getItem('profile.name')
			document.forms['Login']['ageField'].value = localStorage.getItem('profile.age')
			document.forms['Login']['email'].value = localStorage.getItem('profile.email')
			document.forms['Login']['number'].value = localStorage.getItem('profile.telephone')
		}
	}
		
		function validateForm() {
	
			var x = document.forms['Login']['fName'].value;
			if (x == null || x == "") {
				alert("Please enter your name");
				document.getElementById('FN').focus();
				return false;
				
			} else if (x.length < 3) {
				alert("Name must be longer than 3 characters");
				document.getElementById('FN').focus();
				return false;
			}

			var a = document.forms['Login']['ageField'].value;
			if (a == null || a == "") {
				alert("age can not be empty");
				document.getElementById('age').focus();
				return false;
			} 
			else if (parseInt(a) < 12 || parseInt(a) > 95) {
				alert("age should be between 12 and 95");
				document.getElementById('age').focus();
				return false;
			}
			
			var em = document.forms['Login']['email'].value;
			var atpos = em.indexOf("@");
		
			var dotpos = em.lastIndexOf(".");
			// Compare the numerical values
			if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= em.length) {
				alert("Not a valid e-mail address");
				document.getElementById('e').focus();
				return false;
			} 

			 else if (em == null || em == '') {
				alert('Email can not be empty')
				document.getElementById('e').focus;
				return false
			}
		
			var n = document.forms['Login']['number'].value;
			if (n == null || n == "") {
				alert("number can not be empty");
				document.getElementById('num').focus();
				return false;
			} else if (n.length > 7) {
				alert("Number can not be more than 7 digits");
				document.getElementById('num').focus();
				return false;
			}

			return true;
	}
	
var myProfile = new Profile (); 

function UpdateProfile () {
	var isValid   = validateForm ();
	if (isValid) {
		var name   = document.getElementById ("FN");
		var age    = document.getElementById ("age");
		var email  = document.getElementById ("e");
		var number = document.getElementById ("num");
	
		myProfile.setProfile (
			name.value,
			age.value,
			email.value,
			number.value);
	}
}

function displayProfile() {
	myProfile.getProfile ();
}