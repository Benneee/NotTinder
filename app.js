const profiles = scrollProfile(data);

// A click event to cause the iteration through the profiles
const btn = document.getElementById('next');
btn.addEventListener('click', nextProfile);

// To fix the issue of nothing showing on the page when we reload
nextProfile();

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  currentProfile !== undefined ? showProfileInfo(currentProfile) : reloadPage();
}

// Profile Iterator
function scrollProfile(profiles) {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
    }
  };
}

function showProfileInfo(currentProfile) {
  const profileDisplay = document.getElementById('profileDisplay');

  profileDisplay.innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name} </li>
      <li class="list-group-item">Age: ${currentProfile.age} </li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>
      <li class="list-group-item">Location: ${currentProfile.location} </li>
    </ul>
  `;

  const imageDisplay = document.getElementById('imageDisplay');

  imageDisplay.innerHTML = `
    <img src = "${currentProfile.image}">
  `;
}

function reloadPage() {
  window.location.reload();
}
