const scholarships = [
  {
    title: "DAAD Germany Full Scholarship",
    country: "Germany",
    field: "Engineering",
    gpa: 8.0,
    link: "#"
  },
  {
    title: "Fulbright USA Program",
    country: "USA",
    field: "Computer Science",
    gpa: 3.5,
    link: "#"
  },
  {
    title: "Chevening Scholarship",
    country: "UK",
    field: "Law",
    gpa: 7.5,
    link: "#"
  },
  {
    title: "Canada Excellence Scholarship",
    country: "Canada",
    field: "Business",
    gpa: 8.2,
    link: "#"
  }
];

// Render scholarships based on filters
document.getElementById("scholarshipForm").addEventListener("submit", function (e) {
  e.preventDefault();
  renderScholarships();
});

// Render scholarships function
function renderScholarships() {
  const results = document.getElementById("results");
  results.innerHTML = "";

  const selectedCountry = document.getElementById("filterCountry").value;
  const selectedField = document.getElementById("filterField").value;
  const minGPA = parseFloat(document.getElementById("filterGPA").value) || 0;
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const filtered = scholarships.filter(sch => {
    const matchesCountry = !selectedCountry || sch.country === selectedCountry;
    const matchesField = !selectedField || sch.field === selectedField;
    const matchesGPA = sch.gpa >= minGPA;
    return matchesCountry && matchesField && matchesGPA;
  });

  if (filtered.length === 0) {
    results.innerHTML = `<div class="alert alert-warning text-center">No scholarships matched your filters.</div>`;
    return;
  }

  filtered.forEach(sch => {
    const isWishlisted = wishlist.includes(sch.title);
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card h-100 p-3">
          <h5>${sch.title}</h5>
          <p><strong>Country:</strong> ${sch.country}</p>
          <p><strong>Field:</strong> ${sch.field}</p>
          <p><strong>GPA Required:</strong> ${sch.gpa}</p>
          <div class="d-flex justify-content-between align-items-center mt-auto">
            <a href="${sch.link}" class="btn btn-outline-primary btn-sm">Apply Now</a>
            <button class="btn ${isWishlisted ? 'btn-danger' : 'btn-outline-danger'} btn-sm" onclick="toggleWishlist('${sch.title}')">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>`;
    results.innerHTML += card;
  });
}

// Add or remove scholarship from wishlist
function toggleWishlist(title) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const index = wishlist.indexOf(title);
  if (index > -1) {
    wishlist.splice(index, 1);
    alert("❌ Removed from wishlist");
  } else {
    wishlist.push(title);
    alert("✅ Added to wishlist");
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderScholarships(); // re-render to update heart button
}

// Initial render on page load
document.addEventListener("DOMContentLoaded", renderScholarships);
