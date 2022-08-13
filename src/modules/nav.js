import { DateTime } from './luxon.js';

const linkElments = document.querySelectorAll('.link');
const timeEl = document.querySelector('.header__time');

const switchView = (section) => {
  const sectionElments = document.querySelectorAll('.section');

  sectionElments.forEach((sectionEl) => {
    if (sectionEl.id === section) sectionEl.classList.add('section--active');
    else sectionEl.classList.remove('section--active');
  });

  linkElments.forEach((linkEl) => {
    if (linkEl.dataset.section === section) linkEl.classList.add('link--active');
    else linkEl.classList.remove('link--active');
  });
};

const init = () => {
  const onLinkClick = (event) => {
    const { section } = event.target.dataset;

    switchView(section);
  };

  linkElments.forEach((linkEl) => {
    linkEl.addEventListener('click', onLinkClick);
  });

  const now = DateTime.now();

  timeEl.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
};

export default {
  init,
  switchView,
};