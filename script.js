const projectsContainer = document.getElementById("projects");
const createProjectBtn = document.getElementById("createProjectBtn");

createProjectBtn.addEventListener("click", createProject);

function createProject() {
    const projectName = prompt("Enter project name:");
    const fundingGoal = parseFloat(prompt("Enter funding goal:"));

    if (projectName && !isNaN(fundingGoal) && fundingGoal > 0) {
        const project = {
            name: projectName,
            goal: fundingGoal,
            currentAmount: 0
        };

        displayProject(project);
    } else {
        alert("Invalid project details. Please try again.");
    }
}

function displayProject(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.innerHTML = `
        <h2>${project.name}</h2>
        <p>Goal: $${project.goal}</p>
        <p>Current Amount: $${project.currentAmount}</p>
        <button onclick="contribute(${project.currentAmount}, ${project.goal})">Contribute</button>
    `;
    projectsContainer.appendChild(projectElement);
}

function contribute(currentAmount, goal) {
    const amount = parseFloat(prompt("Enter contribution amount:"));

    if (!isNaN(amount) && amount > 0) {
        currentAmount += amount;
        alert(`Thank you for contributing $${amount}. Current amount: $${currentAmount}`);
        // You would typically handle payment processing here in a real-world scenario
    } else {
        alert("Invalid contribution amount. Please try again.");
    }
}
