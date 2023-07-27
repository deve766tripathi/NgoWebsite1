// script.js
document.getElementById("gotoPage2Btn").addEventListener("click", function() {
    window.location.href = "member.html";
  });

  // script.js
document.getElementById("dona").addEventListener("click", function() {
    window.location.href = "donate.html";
  });
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
      

      // Smooth scrolling for navigation links
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    const headerOffset = 100; // Adjust the header offset according to your layout
  
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
  
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  
  // Form submission handling
  function submitForm() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Add form validation logic here, for example:
    if (!name || !phone || !email || !message) {
      alert("Please fill in all fields before submitting the form.");
      return;
    }
  
    // Here you can send the form data to the server using AJAX or any other method
    // For demonstration purposes, we'll just log the data to the console
    const formData = {
      name: name,
      phone: phone,
      email: email,
      message: message,
    };
    console.log("Form data:", formData);
  
    // Optionally, you can display a success message to the user after form submission
    alert("Thank you for your message!");
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
  
  // Search button click handler (change as per your search logic)
  function handleSearch() {
    const searchTerm = document.getElementById("search").value;
    alert("Searching for: " + searchTerm);
  }
  

  // donate

  document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than 0.");
    } else {
        // You can add your donation processing logic here.
        alert("Thank you for your generous donation of Rs" + amount.toFixed(2));
        document.getElementById("donationForm").reset();
    }
});

// about

// Smooth scrolling when clicking on navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const offsetTop = targetSection.offsetTop;

    window.scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}



    
      
      