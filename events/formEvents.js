const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      console.warn(e.target, 'I am here', user);
    }
  });
};

export default formEvents;
