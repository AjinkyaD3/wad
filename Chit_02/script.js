document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

    const firstName = document.getElementById('firstName').value;
    const nameRegex = /^[A-Za-z]{6,}$/;
    if (!nameRegex.test(firstName)) {
        document.getElementById('fnError').style.display = 'block';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('pwError').style.display = 'block';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const mobile = document.getElementById('mobile').value;
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        document.getElementById('mobileError').style.display = 'block';
        isValid = false;
    }

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
