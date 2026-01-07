// Authentication simulation
const studentCredentials = { username: 'student', password: 'student123' };
const facultyCredentials = { username: 'faculty', password: 'faculty123' };

document.getElementById('student-login').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('student-username').value;
    const password = document.getElementById('student-password').value;
    const errorEl = document.getElementById('student-error');

    if (username === studentCredentials.username && password === studentCredentials.password) {
        sessionStorage.setItem('role', 'student');
        window.location.href = 'student.html';
    } else {
        errorEl.textContent = 'Invalid credentials';
    }
});

document.getElementById('faculty-login').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('faculty-username').value;
    const password = document.getElementById('faculty-password').value;
    const errorEl = document.getElementById('faculty-error');

    if (username === facultyCredentials.username && password === facultyCredentials.password) {
        sessionStorage.setItem('role', 'faculty');
        window.location.href = 'faculty.html';
    } else {
        errorEl.textContent = 'Invalid credentials';
    }
});

// Check role on dashboard pages
function checkRole(requiredRole) {
    const role = sessionStorage.getItem('role');
    if (role !== requiredRole) {
        window.location.href = 'login.html';
    }
}
