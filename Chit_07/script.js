const username = document.getElementById('username');
const password = document.getElementById('password');

// Validation patterns
const patterns = {
    cap: /[A-Z]/,
    small: /[a-z]/,
    num: /[0-9]/,
    spec: /[!@#$%^&*]/
};

function updateValidation(input, type) {
    const val = input.value;
    if (type === 'user') {
        toggleStatus('u-cap', patterns.cap.test(val));
        toggleStatus('u-small', patterns.small.test(val));
        toggleStatus('u-num', patterns.num.test(val));
        toggleStatus('u-spec', patterns.spec.test(val));
        toggleStatus('u-len', val.length >= 8);
    } else {
        toggleStatus('p-cap', patterns.cap.test(val));
        toggleStatus('p-small', patterns.small.test(val));
        toggleStatus('p-spec', patterns.spec.test(val));
        toggleStatus('p-len', val.length >= 8);
    }
}

function toggleStatus(id, isValid) {
    const el = document.getElementById(id);
    if (isValid) {
        el.classList.add('valid');
        el.classList.remove('invalid');
    } else {
        el.classList.add('invalid');
        el.classList.remove('valid');
    }
}

username.addEventListener('input', () => updateValidation(username, 'user'));
password.addEventListener('input', () => updateValidation(password, 'pass'));

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = username.value;
    const pass = password.value;
    
    // Final check for submission (8+ chars and all regex)
    const userRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.{8,})/;
    
    let isValid = true;
    
    if (!userRegex.test(user)) {
        document.getElementById('userError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('userError').style.display = 'none';
    }
    
    if (!passRegex.test(pass)) {
        document.getElementById('passError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passError').style.display = 'none';
    }
    
    if (isValid) {
        alert("Validation Successful! Logging in...");
    }
});

