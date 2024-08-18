const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebaropen = document.querySelector(".sidebaropen"),
      sidebarclose = document.querySelector(".sidebarclose"),
      dropdownBtns = document.querySelectorAll('.dropdown-btn');

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

sidebaropen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickElm = e.target;

    if (!clickElm.classList.contains("sidebaropen") && !clickElm.closest(".menu")) {
        nav.classList.remove("active");
    }
});

// Handle dropdowns
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        let dropdownContent = this.nextElementSibling;
        // Close other dropdowns
        dropdownBtns.forEach(otherBtn => {
            if (otherBtn !== this) {
                otherBtn.classList.remove('active');
                otherBtn.nextElementSibling.style.display = 'none';
            }
        });
        // Toggle the clicked dropdown
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});

// Handle nested dropdowns
document.querySelectorAll('.dropdown-content > a').forEach(link => {
    link.addEventListener('click', function() {
        let nestedDropdown = this.nextElementSibling;
        // Close all other nested dropdowns
        document.querySelectorAll('.dropdown-content .dropdown-content-1, .dropdown-content .dropdown-content-2').forEach(otherNested => {
            if (otherNested !== nestedDropdown) {
                otherNested.style.display = 'none';
                otherNested.previousElementSibling.classList.remove('active');
            }
        });
        // Toggle the clicked nested dropdown
        if (nestedDropdown.style.display === "block") {
            nestedDropdown.style.display = "none";
        } else {
            nestedDropdown.style.display = "block";
        }
    });
});
