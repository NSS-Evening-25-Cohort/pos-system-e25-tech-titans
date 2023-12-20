// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

// debugtool so TM can see the ID on clicks:
document.addEventListener('click', (e) => {
  console.warn('just clicked on => ', e.target.id);
  console.warn('just clicked on => ', e.type);
});

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
};

init();
