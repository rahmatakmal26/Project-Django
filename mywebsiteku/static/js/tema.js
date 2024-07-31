        const themeToggle = document.getElementById('tema-mode');
        const body = document.body;

        // Fungsi untuk mengatur ikon berdasarkan mode
        function setThemeIcon(isDarkMode) {
            themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        }

        // Cek mode awal
        if (body.classList.contains('dark-mode')) {
            setThemeIcon(true);
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            setThemeIcon(body.classList.contains('dark-mode'));
        });