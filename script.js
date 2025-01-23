document.getElementById('menu').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById('task-system').addEventListener('click', () => {
    document.getElementById('task-container').classList.remove('hidden');
    document.getElementById('sidebar').classList.remove('active');
});

document.getElementById('add-task').addEventListener('click', () => {
    document.getElementById('task-modal').classList.remove('hidden');
});

document.getElementById('cancel-task').addEventListener('click', () => {
    document.getElementById('task-modal').classList.add('hidden');
});

document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('task-name').value;
    const desc = document.getElementById('task-desc').value;
    const difficulty = parseInt(document.getElementById('task-difficulty').value);

    const rewards = [2, 10, 15, 20, 30, 45, 65];
    const reward = rewards[difficulty] || 0;

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <div>
            <strong>${name}</strong> (${difficulty}⭐)
        </div>
        <div>Reward: ${reward} min</div>
    `;

    taskItem.addEventListener('click', () => {
        alert(`Task: ${name}\nDescription: ${desc}\nDifficulty: ${difficulty}⭐\nReward: ${reward} min`);
    });

    taskList.appendChild(taskItem);
    document.getElementById('task-modal').classList.add('hidden');
    document.getElementById('task-form').reset();
});

const counter = document.getElementById('counter');
counter.addEventListener('click', () => {
    document.getElementById('counter-modal').classList.remove('hidden');
});

document.getElementById('close-counter').addEventListener('click', () => {
    document.getElementById('counter-modal').classList.add('hidden');
});
console.log(JSON.parse(localStorage.getItem('users')));
localStorage.clear();
checkLocalStorage();