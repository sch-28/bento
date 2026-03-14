// ┬  ┌─┐┬ ┬┌─┐┬ ┬┌┬┐
// │  ├─┤└┬┘│ ││ │ │
// ┴─┘┴ ┴ ┴ └─┘└─┘ ┴
// Workspace tab switching + ls bookmark rendering

let activeWorkspace = 0;

const renderWorkspace = (index) => {
	const ws = CONFIG.workspaces[index];
	if (!ws) return;

	// Update prompt paths
	const path = `~/bookmarks/${ws.name}`;
	const promptPath = document.getElementById('promptPath');
	const promptPathIdle = document.getElementById('promptPathIdle');
	if (promptPath) promptPath.innerText = path;
	if (promptPathIdle) promptPathIdle.innerText = path;

	// Clear and repopulate ls output
	const output = document.getElementById('lsOutput');
	if (!output) return;
	output.innerHTML = '';

	for (const bookmark of ws.bookmarks) {
		const icon = bookmark.icon
			? `<i class="ls-entry-icon" icon-name="${bookmark.icon}"></i>`
			: '';
		const entry = `<a
			href="${bookmark.link}"
			target="${CONFIG.openInNewTab ? '_blank' : ''}"
			class="ls-entry"
		>${icon}${bookmark.name}</a>`;
		output.insertAdjacentHTML('beforeend', entry);
	}

	lucide.createIcons();

	// Update active ws tag
	document.querySelectorAll('.ws-tag').forEach((tag, i) => {
		tag.classList.toggle('active', i === index);
	});

	activeWorkspace = index;
};

const generateWsTags = () => {
	const container = document.getElementById('wsTags');
	if (!container) return;

	CONFIG.workspaces.forEach((ws, i) => {
		const tag = document.createElement('span');
		tag.className = 'ws-tag' + (i === 0 ? ' active' : '');
		tag.textContent = `${ws.id}:${ws.name}`;
		tag.addEventListener('click', () => renderWorkspace(i));
		container.appendChild(tag);
	});
};

// Keyboard: Alt+1, Alt+2, Alt+3 to switch workspaces
document.addEventListener('keydown', (e) => {
	if (!e.altKey) return;
	const num = parseInt(e.key);
	if (!isNaN(num) && num >= 1 && num <= CONFIG.workspaces.length) {
		e.preventDefault();
		renderWorkspace(num - 1);
	}
});

generateWsTags();
renderWorkspace(0);
