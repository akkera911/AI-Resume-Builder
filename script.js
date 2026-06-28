document.getElementById("name").addEventListener("input", function() {
    document.getElementById("preview-name").textContent = this.value;
});
document.getElementById("email").addEventListener("input", function() {
    document.getElementById("preview-email").textContent = this.value;
});
