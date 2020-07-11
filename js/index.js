async function displayProjects() {
	const element = document.getElementsByClassName('projects')[0];
	const data = [];

	for (const project of PROJECTS) {
		data.push(`
			<div class="project">
				<div class="project-header">
					<h1><a href="${project.link}" target="blank">${project.title}</a></h1>
				</div>
				<div class="project-description">
					<p>${project.description}</p>
				</div>
				<div class="project-tags">
					${project.technologies.map(tag => `<div class="project-tag"><span>${tag}</span></div>`).join('\n')}
				</div>
				<div class="project-thumbnail">
					<img src="assets/${project.imageId}.png">
				</div>
			</div>
		`);
	}

	element.innerHTML += data.join('\n<hr>\n')
}

window.onload = displayProjects;