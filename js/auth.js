//signout
// const signout = document.querySelector('#logout');
// signout.addEventListener('click', (e) => {
//     e.preventDefault();
//     auth.signOut().then(() => {
//         console.log('user logged out');
//     });
// });
$("#logout").click(function () 
{
    firebase.auth().signOut();
})