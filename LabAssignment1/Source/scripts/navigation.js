function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    localStorage.setItem("name", profile.getName());
    localStorage.setItem("email", profile.getEmail());
    localStorage.setItem("id", profile.getId());

    var id_token = googleUser.getAuthResponse().id_token;
    localStorage.setItem("id_token", id_token);
    window.location.href = "#/home";
};

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        window.location.replace("#/login");
        location.reload();
    });
}

function loginRedirect() {
    window.location.replace("#/home");

}