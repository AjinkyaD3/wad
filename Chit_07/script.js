const username = document.getElementById('username');
const password = document.getElementById('password');

// Simple helper to toggle valid/invalid class
function check(id, ok) {
    const el = document.getElementById(id);
    el.className = ok ? 'valid' : 'invalid';
}

// Live validation on typing
username.addEventListener('input', function() {
    const v = this.value;
    check('u-cap', /[A-Z]/.test(v));
    check('u-small', /[a-z]/.test(v));
    check('u-num', /[0-9]/.test(v));
    check('u-spec', /[!@#$%^&*]/.test(v));
    check('u-len', v.length >= 8);
});

password.addEventListener('input', function() {
    const v = this.value;
    check('p-cap', /[A-Z]/.test(v));
    check('p-small', /[a-z]/.test(v));
    check('p-spec', /[!@#$%^&*]/.test(v));
    check('p-len', v.length >= 8);
});

// Form submit validation using simple individual regex checks
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const u = username.value, p = password.value;
    let valid = true;

    // Username: uppercase + lowercase + number + special + 8 chars
    if (!/[A-Z]/.test(u) || !/[a-z]/.test(u) || !/[0-9]/.test(u) || !/[!@#$%^&*]/.test(u) || u.length < 8) {
        document.getElementById('userError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('userError').style.display = 'none';
    }

    // Password: uppercase + special + 8 chars
    if (!/[A-Z]/.test(p) || !/[!@#$%^&*]/.test(p) || p.length < 8) {
        document.getElementById('passError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('passError').style.display = 'none';
    }

    if (valid) alert("Login Successful!");
});
