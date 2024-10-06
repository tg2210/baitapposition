
var dropdown = document.querySelector('.dropbtn');

dropdown.addEventListener('click', function(event) {
    event.preventDefault(); 
    var dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
