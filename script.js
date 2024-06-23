document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.backgroundColor = '#6a11cb';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        });
    });

    const toggles = document.querySelectorAll('.toggle-input');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            if (this.checked) {
                closeAllToggles();
                this.checked = true;
                this.nextElementSibling.nextElementSibling.style.display = 'block';
            } else {
                this.nextElementSibling.nextElementSibling.style.display = 'none';
            }
        });
    });

    function closeAllToggles() {
        toggles.forEach(toggle => {
            toggle.nextElementSibling.nextElementSibling.style.display = 'none';
            toggle.checked = false;
        });
    }
});

/*document.addEventListener("DOMContentLoaded", function() {
    const lastUpdatedElement = document.getElementById("lastUpdated");
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    lastUpdatedElement.textContent = formattedDate;
}); */

