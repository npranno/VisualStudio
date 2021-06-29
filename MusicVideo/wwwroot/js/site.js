// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

var id = null;
function motion() {
    var elem = document.getElementById("animation");
    var pos = 0
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 500) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}
