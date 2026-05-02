document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

    // 1. First Name: Alphabets only, length >= 6
    const firstName = document.getElementById('firstName').value;
    const nameRegex = /^[A-Za-z]{6,}$/;
    if (!nameRegex.test(firstName)) {
        document.getElementById('fnError').style.display = 'block';
        isValid = false;
    }

    // 2. Password: length >= 6
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('pwError').style.display = 'block';
        isValid = false;
    }

    // 3. Email: Standard pattern
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // 4. Mobile Number: 10 digits only
    const mobile = document.getElementById('mobile').value;
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        document.getElementById('mobileError').style.display = 'block';
        isValid = false;
    }

    // 5. Last Name and Address: Not Empty
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;

    if (lastName.trim() === "") {
        document.getElementById('lnError').style.display = 'block';
        isValid = false;
    }
    if (address.trim() === "") {
        document.getElementById('addrError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
    }
});
