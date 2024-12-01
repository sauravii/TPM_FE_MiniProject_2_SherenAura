const skillInput = document.getElementById("skill");
const addSkillBtn = document.getElementById("add-skill-btn");
const skillsContainer = document.querySelector(".skills");

function addSkill() {
  const skillText = skillInput.value.trim();
  if (skillText === "") {
    alert("Please enter a skill!");
    return;
  }

  const skillCard = document.createElement("div");
  skillCard.classList.add("card-skills");

  const skillName = document.createElement("p");
  skillName.classList.add("skill-text");
  skillName.textContent = skillText;

  const closeButton = document.createElement("button");
  closeButton.classList.add("btn-close");
  closeButton.innerHTML = '<img src="./assets/ic-x.png" alt="Close Icon" class="close-icon" />';
  closeButton.addEventListener("click", () => skillCard.remove()); // Fungsi hapus skill

  skillCard.appendChild(skillName);
  skillCard.appendChild(closeButton);

  skillsContainer.appendChild(skillCard);

  skillInput.value = "";
}

addSkillBtn.addEventListener("click", addSkill);

skillInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addSkill();
  }
});
