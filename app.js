// Simple client-side auth logic
document.addEventListener('DOMContentLoaded', function () {
  // Change this value to set the correct password
  const CORRECT_PASSWORD = '1yz7Gtye3nnfmt1OdS7haT_Es9-NE8OvT';

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('errorMsg');

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const val = passwordInput.value.trim();
      if (val === CORRECT_PASSWORD) {
        localStorage.setItem('authenticated', 'true');
        // redirect to watch page
        location.href = 'watch.html';
      } else {
        errorMsg.textContent = 'Incorrect password. Please try again.';
        errorMsg.classList.remove('hidden');
        passwordInput.classList.add('border-red-500');
      }
    });
  }

  // Logout handler (on watch page)
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      localStorage.removeItem('authenticated');
      location.href = 'index.html';
    });
  }
});
