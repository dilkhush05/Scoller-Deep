# Scoller-Deep

🎓 ScholarMatch - Scholarship Finder Web App
ScholarMatch is a fully responsive and interactive web application that helps users find scholarships based on filters like country, field, and GPA. It includes user authentication (sign up, login, logout), profile management, a wishlist feature, and a dynamic theme toggle (light/dark mode).

+++++++++++    🔥 Features   +++++++++++
🔐 User Authentication

Sign Up / Login / Logout with localStorage

Pages protected from unauthenticated access

🎯 Scholarship Filter Form

Filter scholarships by country, field, and GPA

📋 Wishlist Page

Save scholarships to your favorites list

🧑‍💼 User Profile Page

View and manage profile information (education, bio, etc.)

🌗 Dark/Light Mode Toggle

Saves user theme preference using localStorage

⚡ Fully Responsive Design

Mobile-first and works across all screen sizes

🛠️ Tech Stack
Frontend: HTML5, CSS3, Bootstrap 5

Icons: Font Awesome

JavaScript: Vanilla JS for all interactions and authentication

Storage: Browser Local Storage (no backend)

++++++++++++++ 📁 Project Structure +++++++++++
bash
Copy
Edit
ScholarMatch/
│
├── index.html           # Homepage with scholarship finder
├── login.html           # Login form
├── signup.html          # Sign up form
├── profile.html         # User profile page
├── wishlist.html        # Wishlist page (saved scholarships)
│
├── style.css            # Custom styling (light + dark mode support)
├── script.js            # Scholarship filter logic
├── auth.js              # Auth protection + logout logic
│
└── README.md            # Project documentation
🚀 How to Run
Clone the repository or download the files:

bash
Copy
Edit
git clone  :   https://github.com/dilkhush05/Scoller-Deep.git
Open index.html in a browser:

No server required (pure HTML/CSS/JS)

🔐 Auth Notes
If a user tries to open profile.html or wishlist.html without logging in, they will be redirected to login.html.

Login and Signup are handled via localStorage. Once logged in, navbar updates dynamically.

🌗 Theme Toggle
Light/Dark Mode switch is available in the navbar.

The preference is saved in localStorage.

📌 Future Enhancements 
Connect with real-time scholarship API

Add backend using Node.js or Firebase

Add email verification during signup

Add file upload for resume or certificates

🙌 Credits
Made with ❤️ by [dilkhush05]

Built using HTML, CSS, Bootstrap 5, and Vanilla JS

