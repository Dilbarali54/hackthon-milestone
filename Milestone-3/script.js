document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Resume-form");
    const resumeDisplay = document.getElementById("resume-display");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phone number").value;
        const education = document.getElementById("education").value;
        const experience = document.getElementById("experience").value;
        const skills = document.getElementById("skills").value;

        // Generate resume HTML
        const resumeHTML = `
            <h2>${name}'s Resume</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Insert generated HTML into the display section
        resumeDisplay.innerHTML = resumeHTML;
    });
});