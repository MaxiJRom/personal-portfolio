// const $navButtons = document.querySelectorAll(".nav-button");

// document.addEventListener("click", (e) => {
// 	if (e.target.matches(".nav-button")) {
// 		$navButtons.forEach((button) => button.classList.add("active"));

// 		e.target.classList.add("active");
// 	}
// });

const $projectTitles = document.querySelectorAll(".project-title");

$projectTitles.forEach((title) =>
	title.addEventListener("click", (e) => {
		let projectContent = e.target.nextElementSibling;
		let titleSpan = e.target.querySelector("span");

		titleSpan.classList.toggle("open");

		projectContent.ariaHidden
			? projectContent.removeAttribute("aria-hidden")
			: projectContent.setAttribute("aria-hidden", "true");
	})
);
