// TypeScript code for Shareable Resume Builder
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("user-info");
    var dynamicResume = document.getElementById("dynamic-resume");
    var shareableLinkDiv = document.getElementById("shareable-link");
    var shareableLinks = document.getElementById("shareable-links");
    var downloadButton = document.getElementById("download-button");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Get form values
        var username = document.getElementById("username").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Generate dynamic resume
        dynamicResume.innerHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Username:</strong> ").concat(username, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
        // Show shareable link and download button
        shareableLinkDiv.style.display = "block";
        shareableLinks.href = "data:text/html,".concat(encodeURIComponent(dynamicResume.innerHTML));
        shareableLinks.textContent = "View Your Resume Online";
    });
    downloadButton.addEventListener("click", function () {
        var resumeHTML = dynamicResume.innerHTML;
        var blob = new Blob([resumeHTML], { type: "text/html" });
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.html";
        link.click();
    });
});
