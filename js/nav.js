const linkElments = document.querySelectorAll('.link');
const sectionElments = document.querySelectorAll('.section');
function onLinkClick(event) {
  const { section } = event.target.dataset;

  sectionElments.forEach((sectionEl) => {
    if (sectionEl.id === section) sectionEl.classList.add('section--active');
    else sectionEl.classList.remove('section--active');
  });

  linkElments.forEach((linkEl) => {
    if (linkEl.dataset.section === section) linkEl.classList.add('link--active');
    else linkEl.classList.remove('link--active');
  });
}

linkElments.forEach((linkEl) => {
  linkEl.addEventListener('click', onLinkClick);
});