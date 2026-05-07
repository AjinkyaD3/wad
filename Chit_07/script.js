const username = document.getElementById('username');
const password = document.getElementById('password');

function check(id, ok) {
    const el = document.getElementById(id);
    el.className = ok ? 'valid' : 'invalid';
}

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

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const u = username.value, p = password.value;
    let valid = true;

    if (!/[A-Z]/.test(u) || !/[a-z]/.test(u) || !/[0-9]/.test(u) || !/[!@#$%^&*]/.test(u) || u.length < 8) {
        document.getElementById('userError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('userError').style.display = 'none';
    }

    if (!/[A-Z]/.test(p) || !/[!@#$%^&*]/.test(p) || p.length < 8) {
        document.getElementById('passError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('passError').style.display = 'none';
    }

    if (valid) alert("Login Successful!");
});
