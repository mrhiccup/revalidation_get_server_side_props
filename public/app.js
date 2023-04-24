document.addEventListener("DOMContentLoaded", async function() {
    const readmeContainer = document.getElementById("readme-content");

    try {
        const response = await fetch("README.md");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const markdown = await response.text();
        const html = marked(markdown);
        readmeContainer.innerHTML = html;
    } catch (error) {
        readmeContainer.innerHTML = "<p>Error: Failed to fetch and render Readme.md.</p>";
        console.error(error);
    }
});
