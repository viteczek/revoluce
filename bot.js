var zvuk = document.getElementById("audiosong");
function revoluce() {
    zvuk.play();
}
var obrazek = document.getElementById("marx")

obrazek.addEventListener("click", e => {
    revoluce();
})