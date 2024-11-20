// TypeScript code for Shareable Resume Builder
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("user-info") as HTMLFormElement;
    const dynamicResume = document.getElementById("dynamic-resume") as HTMLDivElement;
    const shareableLinkDiv = document.getElementById("shareable-link") as HTMLDivElement;
    const shareableLinks = document.getElementById("shareable-links") as HTMLAnchorElement;
    const downloadButton = document.getElementById("download-button") as HTMLButtonElement;
  
    form.addEventListener("submit", (event: Event) => {
      event.preventDefault();
  
      // Get form values
      const username = (document.getElementById("username") as HTMLInputElement).value;
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const education = (document.getElementById("education") as HTMLTextAreaElement).value;
      const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
      const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  
      // Generate dynamic resume
      dynamicResume.innerHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
      `;
  
      // Show shareable link and download button
      shareableLinkDiv.style.display = "block";
      shareableLinks.href = `data:text/html,${encodeURIComponent(dynamicResume.innerHTML)}`;
      shareableLinks.textContent = "View Your Resume Online";
    });
  
    downloadButton.addEventListener("click", () => {
      const resumeHTML = dynamicResume.innerHTML;
      const blob = new Blob([resumeHTML], { type: "text/html" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "resume.html";
      link.click();
    });
  });
  