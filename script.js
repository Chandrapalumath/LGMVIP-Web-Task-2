document.getElementById('fetchButton').addEventListener('click', fetchUsers);

function fetchUsers() {
    const loader = document.getElementById('loader');
    const userList = document.getElementById('userList');

    loader.style.display = 'block';
    userList.innerHTML = '';  // Clear previous data

    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none';
            data.data.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user-card');
                userDiv.innerHTML = `
                    <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
                    <h2>${user.first_name} ${user.last_name}</h2>
                    <p>${user.email}</p>
                `;
                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            loader.style.display = 'none';
            console.error('Error fetching users:', error);
        });
}
