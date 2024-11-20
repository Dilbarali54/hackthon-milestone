document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Resume-form") as HTMLFormElement;
    const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve input values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phoneNumber = (document.getElementById("phone number") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value;
        const experience = (document.getElementById("experience") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        // Generate resume HTML
        const resumeHTML = `
            <h2> <span contenteditable="true">${name}</span>'s Resume</h2>
            <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
            <p><strong>Phone Number:</strong><span contenteditable="true"> ${phoneNumber}</span></p>
            <h3>Education</h3>
            <p contenteditable="true">${education}</p>
            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>
            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
        `;

        // Insert generated HTML into the display section
        resumeDisplay.innerHTML = resumeHTML;
    });
});
