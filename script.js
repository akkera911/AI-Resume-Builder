document.getElementById("name").addEventListener("input", function() {
    document.getElementById("preview-name").textContent = this.value;
});

document.getElementById("email").addEventListener("input", function() {
    document.getElementById("preview-email").textContent = this.value;
});

document.getElementById("summary").addEventListener("input", function() {
    document.getElementById("preview-summary").textContent = this.value;
});

document.getElementById("education").addEventListener("input", function() {
    document.getElementById("preview-education").textContent = this.value;
});
