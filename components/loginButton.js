import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-success">LOGIN to Get Started</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
  document.querySelector('#header').innerHTML = '<img src="https://static.vecteezy.com/system/resources/previews/015/155/428/non_2x/pizza-slice-icon-neon-sign-bright-glowing-emblem-vector.jpg" width="250" height="400" border-radius="8px">';
};

export default loginButton;
