//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const fullname = signupForm['signup-fullname'].value;
    const email = signupForm['signup-email'].value;
    const username = signupForm['signup-username'].value;
    const password = signupForm['signup-pass'].value;
    const cpassword = signupForm['signup-cpass'].value;

    //sign up the user
    if(password==cpassword){
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred)
        })
    }
    else{
        window.alert("Password does not match with confirm password")
    }
})
