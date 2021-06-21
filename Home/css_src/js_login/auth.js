
//login 
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = loginForm['signin-email'].value;
    const password = loginForm['signin-pass'].value;
    //signin
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
    })
})