async function getProjects() {
	const res = await fetch('./assets/data/projects.json');
	return res.json();
}

async function displayProjects() {
	const projects = await getProjects();
	const element = document.getElementsByClassName('projects')[0];
	const data = [];

	for (const project of projects) {
		data.push(`
			<div class="project">
				<a href="${project.link}" target="_blank"><h2>${project.title}</h2></a>
				<p>${project.description}</p>

				<div class="technologies">
					${project.technologies.map(technology => `<span>${technology}</span>`).join('\n')}
				</div>
				<div class="thumbnail">
					<img src="assets/images/${project.imageId}.png">
				</div>
			</div>
		`);
	}

	element.innerHTML += data.join('\n<hr>\n')
}

window.onload = displayProjects;