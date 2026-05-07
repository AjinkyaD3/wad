document.getElementById('ajaxForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value
    };

    // 1. Save to Local Storage
    let users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    users.push(userData);
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    // 2. AJAX POST using XMLHttpRequest (Old Method)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 201 || xhr.status === 200) {
                console.log('XHR Response:', JSON.parse(xhr.responseText));
                alert('Data saved successfully (LocalStorage + AJAX POST)!');
            } else {
                alert('Saved to LocalStorage. Server returned: ' + xhr.status);
            }
            window.location.href = 'list.html';
        }
    };
    xhr.send(JSON.stringify(userData));

    /* --- Modern Alternative: Fetch API (Commented) ---
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        console.log('Fetch Response:', data);
        alert('Data saved!');
        window.location.href = 'list.html';
    })
    .catch(err => alert('Saved to LocalStorage only.'));
    */
});
