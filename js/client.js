$("#project-info").click(function () {
    var projectname = $("#project-name").val();
    var projectmanager = $("#project-manager").val();
    var projectfrontend = $("#project-frontend").val();
    var projectbackend = $("#project-backend").val();
    var projectdescription = $("#project-description").val();

    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);



    var userData =
    {
        "project-name": projectname,
        "project-manager": projectmanager,
        "project-frontend": projectfrontend,
        "project-backend": projectbackend,
        "project-description": projectdescription,
    };

    usersRef.set(userData, (error) => {
            if (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message : " + errorMessage);

            }
            else {
                window.location.href = "http://127.0.0.1:8080/Home/index.html";
            }
        });




})