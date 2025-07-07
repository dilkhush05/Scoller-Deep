document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); 

  const protectedPages = ["profile.html", "wishlist.html"]; 
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (protectedPages.includes(currentPage) && !isLoggedIn) {
    alert("Please log in first.");
    window.location.href = "login.html";
  }
});

