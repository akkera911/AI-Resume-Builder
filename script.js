document.getElementById("name").addEventListener("input", function() {
    document.getElementById("preview-name").textContent =
    this.value || "Your Name";
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

document.getElementById("skills").addEventListener("input", function() {
    document.getElementById("preview-skills").textContent = this.value;
});

document.getElementById("experience").addEventListener("input", function() {
    document.getElementById("preview-experience").textContent = this.value;
});

document.getElementById("download-btn").addEventListener("click", function() {
    const resume = document.getElementById("resume-preview");

    html2pdf().from(resume).save("resume.pdf");
});

document.querySelector("form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value;

    if (name.trim() === "") {
        alert("Please enter your name");
        e.preventDefault();
    }
});

document.getElementById("phone").addEventListener("input", function () {
    document.getElementById("preview-phone").textContent = this.value;
});

const summary = document.getElementById("summary");
const counter = document.getElementById("summary-count");

summary.addEventListener("input", function () {
    counter.textContent = `${this.value.length} / 300 characters`;
});
