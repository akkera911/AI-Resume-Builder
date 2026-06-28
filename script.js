document.getElementById("name").addEventListener("input", function() {
    document.getElementById("preview-name").textContent = this.value;
});
