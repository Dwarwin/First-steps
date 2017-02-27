
// Show/hide dropdown content
function showDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Show/hide login/registration window
function showlogin(state){

    document.getElementById('login-window').style.display = state;
    document.getElementById('wrap').style.display = state;
    document.getElementById('loginForm').reset();
}
function showreg(state){

    document.getElementById('reg-window').style.display = state;
    document.getElementById('wrap').style.display = state;
    document.getElementById('regForm').reset();
}
