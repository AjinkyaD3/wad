document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // Username Regex: 1 Block, 1 Small, 1 Special, 1 Num, min 8 chars
    const userRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    
    // Password Regex: 1 Block, 1 Special, min 8 chars
    const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    
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
