const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
	const isOpen = siteNav.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
	menuToggle.querySelector('.menu-icon').textContent = isOpen ? '×' : '+';
});

siteNav.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		siteNav.classList.remove('open');
		menuToggle.setAttribute('aria-expanded', 'false');
		menuToggle.querySelector('.menu-icon').textContent = '+';
	});
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && siteNav.classList.contains('open')) {
		siteNav.classList.remove('open');
		menuToggle.setAttribute('aria-expanded', 'false');
		menuToggle.querySelector('.menu-icon').textContent = '+';
		menuToggle.focus();
	}
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
