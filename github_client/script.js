document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const token = document.getElementById('password').value;
  fetchRepositories(token);
});

async function fetchRepositories(token) {
  try {
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (response.ok) {
      displayRepositories(data);
      showMessage('Repositories fetched successfully.', 'success');
    } else {
      showMessage('Failed to fetch repositories.', 'error');
      clearRepositories();
    }
  } catch (error) {
    showMessage('An error occurred while fetching repositories.', 'error');
    clearRepositories();
  }
}

function displayRepositories(repositories) {
  const reposList = document.getElementById('repos-list');
  reposList.innerHTML = '';

  if (repositories && repositories.length > 0) {
    repositories.forEach(repo => {
      const li = document.createElement('li');
      li.textContent = repo.name;
      reposList.appendChild(li);
    });
  } else {
    showMessage('No repositories found.', 'error');
  }
}

function clearRepositories() {
  const reposList = document.getElementById('repos-list');
  reposList.innerHTML = '';
}

function showMessage(message, type) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.className = type;
}