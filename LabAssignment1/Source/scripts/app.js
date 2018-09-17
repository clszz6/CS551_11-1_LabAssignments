// Google Login
function loadApiKey () {
    alert("onloading");
    gapi.client.setApiKey('AIzaSyC8oG_pL5ZVy3lZBRx6PTIW1vwlZeHDXH8');
    gapi.client.load('plus', 'v1', function() {});
} 