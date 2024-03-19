window.onload = function() {
    alert("Successfully logged-in");

    let signOutButton = document.getElementById('signout');
    signOutButton.addEventListener('click', function() {
    alert("Successfully logged-out");
    });
}