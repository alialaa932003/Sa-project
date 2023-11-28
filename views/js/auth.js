const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

const signUpForm = document.getElementById("signup-form");
const signUpName = document.getElementById("signup-name");
const signUpEmail = document.getElementById("signup-email");
const signUpPassword = document.getElementById("signup-password");
const signUpPasswordVerification = document.getElementById(
	"signup-password__verification"
);

const user = {
	email: "test@test.com",
	password: "Abcd123!",
};

const homeURL = "https://alialaa932003.github.io/Sa-project/views/home1.html";

const validateEmail = (email) => {
	// make email regular expression pattern as:
	// 1. Starts with one or more characters that are not whitespace or @
	// 2. Followed by @, Followed by one or more characters that are not whitespace or @
	// 3. Followed by a dot
	// 4. Ends with one or more characters that are not whitespace or @
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	return emailRegex.test(email);
};

const validatePassword = (password) => {
	// make password regular expression pattern as:
	// 1. Contains at least one lowercase letter
	// 2. Contains at least one uppercase letter
	// 3. Contains at least one digit
	// 4. Contains at least one special character
	// 5. Is at least 8 characters long
	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

	return passwordRegex.test(password);
};

const validateName = (name) => {
	let isValid = true;
	const trimmedName = name.trim();

	if (trimmedName === "") isValid = false;
	else if (trimmedName.length < 2) isValid = false;

	return isValid;
};

/* Login Handling */
const handleLoginValidation = (event) => {
	event.preventDefault();

	const email = loginEmail.value.trim();
	const password = loginPassword.value.trim();

	if (!validateEmail(email)) {
		alert("ادخل بريد الكتروني صحيح مثال (example@example.com)");
		return;
	}

	if (email !== user.email) {
		alert("البريد الالكتروني غير صحيح حاول مره اخري بالبيانات الصحيجه");
		return;
	}

	if (password !== user.password) {
		alert("كلمه المرور غير صحيح حاول مره اخري بالبيانات الصحيجه");
		return;
	}

	window.location.assign(homeURL);
};
loginForm.addEventListener("submit", handleLoginValidation);

/* Signup Handling */
const handleSignupValidation = (event) => {
	event.preventDefault();

	const name = signUpName.value.trim();
	const email = signUpEmail.value.trim();
	const password = signUpPassword.value.trim();
	const passwordVerification = signUpPasswordVerification.value.trim();

	if (name === "") {
		alert("ادخل اسمك");
		return;
	}

	if (!validateEmail(email)) {
		alert("ادخل بريد الكتروني صحيح مثال (example@example.com)");
		return;
	}

	if (!validatePassword(password)) {
		alert(
			"الرجاء إدخال كلمة السر الصحيحة. يجب أن يتكون من 8 أحرف على الأقل، ويحتوي على حرف صغير واحد على الأقل، وحرف كبير واحد، ورقم واحد، وحرف خاص واحد."
		);
		return;
	}

	if (passwordVerification !== password) {
		alert("كلمتين المرور غير متطابقتين");
		return;
	}

	window.location.assign(homeURL);
};
signUpForm.addEventListener("submit", handleSignupValidation);
