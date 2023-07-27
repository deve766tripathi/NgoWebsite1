 
 // Search button click handler (change as per your search logic)
 function handleSearch() {
    const searchTerm = document.getElementById("search").value;
    alert("Searching for: " + searchTerm);
  }
 
 // reg
 document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Fetch the values entered by the user
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
  
    // Perform any additional validation if needed
  
    // Show the submission message
    const submissionMessage = document.getElementById("submissionMessage");
    submissionMessage.innerHTML = `Thank you for registering, ${name}! Your form has been submitted successfully.`;
  
    // Clear the form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("password").value = "";
  });