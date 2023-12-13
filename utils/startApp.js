import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  //domEvents(user);
  //formEvents(user);
  navBar();
  logoutButton(); 
  // navigationEvents(user);

};

export default startApp;
