import logoutButton from '../components/logoutButton';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import viewHomePage from '../pages/homepage';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  viewHomePage(user);
  navigationEvents();
  domEvents();
  formEvents(user);
};

export default startApp;
