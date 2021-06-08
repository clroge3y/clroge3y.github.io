const messageFieldsHeight = document.querySelector('.message-fields').clientHeight;
const userFields = document.querySelector('.user-fields');
const dashboardSearch = document.querySelector('.dashboard-search');
const magBG = document.querySelector('.mag-bg');
const userSearch = document.querySelector('.user-search');
const userMessage = document.querySelector('.user-message');
const alertBanner = document.querySelector(".alert");
const bellIcon = document.querySelector(".bell-icon");
const notifications = document.querySelector("#myDropdown");

//Creates and closes alert banner
alertBanner.innerHTML =
`
<div class="alert-container">
  <div class="alert">
    <p><strong>Alert</strong> - You have unread messages.</p>
    <button class="btn-alert">&times;</button>
  </div>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("btn-alert")) {
    alertBanner.style.display = "none"
    }
});

// Creates box shadow on dashboard-search:focus
dashboardSearch.addEventListener('focus', () => {
  magBG.style.boxShadow = '4px 0 4px 2px rgba(140, 140, 140, 0.2)';
});

// Removes box shadow after dashboard-search:blur
dashboardSearch.addEventListener('blur', () => {
  magBG.style.boxShadow = '';
});

// Sets height of user-fields div equal to height of message-fields div
userFields.style.height = messageFieldsHeight + 'px';

// Listens for submit event on any child element in user-fields (through event bubbling)
userFields.addEventListener('submit', (e) => {
  e.preventDefault();
  let user = userSearch.value;
  let message = userMessage.value;
  if (user == '' && message == '') {
    window.alert('You haven\'t entered a user or message.');
  } else if (user == '') {
    window.alert('You haven\'t entered a user.');
  } else if (message == '') {
    window.alert('You haven\'t entered a message.');
  } else {
    window.alert('Your message has been delivered.');
  }
});
