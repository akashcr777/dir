import { createProfileCard } from './cardModule.js';

const container = document.getElementById("profileContainer");
document.getElementById("addProfileBtn").addEventListener("click", () => {
    const name = prompt("Enter Name:");
    const role = prompt("Enter Role:");
    if (name && role) {
        const card = createProfileCard(name, role);
        container.appendChild(card);
    }
});
