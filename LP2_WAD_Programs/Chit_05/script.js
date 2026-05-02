document.getElementById('ajaxForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value
    };

    // 1. Push to Local Storage
    let users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    users.push(userData);
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    // 2. Push with AJAX POST (Mocking with Fetch to a placeholder)
    // Note: In a real lab, you might point to a local PHP/Node script.
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(json => {
        console.log('AJAX Response:', json);
        alert('Data saved successfully (Local Storage + Mock AJAX POST)!');
        window.location.href = 'list.html';
    })
    .catch(err => {
        console.error('AJAX Error:', err);
        alert('Data saved to LocalStorage, but AJAX failed (expected without server).');
    });
});
