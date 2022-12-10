const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://github.com/sethspencer5/se_project_aroundtheus/blob/main/images/yosemite-valley.jpg?raw=true",
      },
    
      {
        name: "Lake Louise",
        link: "https://github.com/sethspencer5/se_project_aroundtheus/blob/main/images/lake-louise.png?raw=true",
      },
    
      {
        name: "Bald Mountains",
        link: "https://github.com/sethspencer5/se_project_aroundtheus/blob/main/images/bald-mountains.png?raw=true",
      },
    
      {
        name: "Latemar",
        link: "https://github.com/sethspencer5/se_project_aroundtheus/blob/main/images/latemar.png?raw=true",
      },
    
      {
        name: "Vanoise National Park",
        link: "https://github.com/sethspencer5/se_project_aroundtheus/blob/main/images/vanoise-national-park.png?raw=true",
      },
    
      {
        name: "Lago di Braies",
        link: "https://github.com/sethspencer5/se_project_aroundtheus/blob/main/images/lago-di-braies.png?raw=true",
      },
]

// Variables
const editProfilePopUp = document.querySelector(".modal__edit");

const editProfileButton = document.querySelector(".profile__edit");

const editProfileForm = document.querySelector(".modal__form-edit");

const saveProfileEditForm = document.querySelector(".modal__form-edit");

const closeEditProfileButton = document.querySelector(
  ".modal__container_close-button"
);

const profileName = document.querySelector(".profile__name");

const profileJob = document.querySelector(".profile__title");

const nameInput = document.querySelector(`.form__input[name="name"]`);

const jobInput = document.querySelector(`.form__input[name="description"]`);

// Open Profile Modal

function openModal(modal) {
  modal.classList.add("modal__opened");
}

function openProfileModal() {
  const profileName = document.querySelector(".profile__name").textContent;
  const profileJob = document.querySelector(".profile__title").textContent;
  const nameInput = document.querySelector('.form__input[name="name"]');
  const jobInput = document.querySelector('.form__input[name="description"]');
  nameInput.value = profileName;
  jobInput.value = profileJob;
  openModal(editProfilePopUp);
}

editProfileButton.addEventListener("click", openProfileModal);

// Close Profile Modal

function closeModal(modal) {
  modal.classList.remove("modal__opened");
}

closeEditProfileButton.addEventListener("click", closeProfileModal);

function closeProfileModal() {
  closeModal(editProfilePopUp);
}

// Submit Button

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.getElementById("name").value;
  const jobInput = document.getElementById("description").value;

  profileName.textContent = nameInput;
  profileJob.textContent = jobInput;

  editProfileForm.reset();
  closeProfileModal();
}

saveProfileEditForm.addEventListener("submit", handleProfileFormSubmit);
