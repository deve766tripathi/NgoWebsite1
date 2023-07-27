  // Search button click handler (change as per your search logic)
  function handleSearch() {
    const searchTerm = document.getElementById("search").value;
    alert("Searching for: " + searchTerm);
  }



const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      photo: "en2.jpg", // Replace with the actual image file name
    },
    {
      name: "Jane Smith",
      position: "Designer",
      photo: "jane-smith.jpg", // Replace with the actual image file name
    },
    // Add more team members here
  ];
  
  // Function to generate the HTML for each team member
  function generateTeamMemberCard(member) {
    return `
      <div class="team-member">
        <img src="${member.photo}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.position}</p>
      </div>
    `;
  }
  
  // Function to add team members to the team container
  function addTeamMembers() {
    const teamContainer = document.getElementById("teamContainer");
  
    for (const member of teamMembers) {
      const memberCard = generateTeamMemberCard(member);
      teamContainer.innerHTML += memberCard;
    }
  }
  
  // Call the function to add team members on page load
  addTeamMembers();
  
 
  
  
  
  