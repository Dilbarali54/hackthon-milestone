document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("Resume-form");
    var resumeDisplay = document.getElementById("resume-display");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        // Retrieve input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phone number").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Generate resume HTML
        var resumeHTML = "\n            <h2> <span contenteditable=\"true\">".concat(name, "</span> Resume</h2>\n            <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n            <p><strong>Phone Number:</strong><span contenteditable=\"true\"> ").concat(phoneNumber, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        // Insert generated HTML into the display section
        resumeDisplay.innerHTML = resumeHTML;
    });
});
