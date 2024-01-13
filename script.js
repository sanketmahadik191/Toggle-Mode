document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const button = document.getElementById('toggleBtn');

    button.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        button.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });
});