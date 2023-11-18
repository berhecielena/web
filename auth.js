// Function to redirect users based on roles after authentication
function redirectToInterface(role) {
  if (role === "author") {
    window.location.href = "author-interface.html"; // Redirect to Author Interface
  } else if (role === "reader") {
    window.location.href = "reader-interface.html"; // Redirect to Reader Interface
  } else if (role === "editor") {
    window.location.href = "editor-interface.html"; // Redirect to Editor Interface
  } else {
    // Handle other roles or scenarios
  }
}

// Example authentication logic after form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission (for example purposes)

    // Simulating successful authentication and determining role
    const username = document.getElementById("username").value;
    // Assuming a simple check for role determination based on username
    if (username === "author") {
      redirectToInterface("author");
    } else if (username === "reader") {
      redirectToInterface("reader");
    } else if (username === "editor") {
      redirectToInterface("editor");
    } else {
      alert("Invalid credentials");
    }
  });
