// Variables
const editProfilePopUp = document.querySelector(".modal");

const editProfileButton = document.querySelector(".profile__edit-button");

const editProfileForm = document.querySelector(".modal__form-edit");

const saveProfileEditForm = document.querySelector(".modal__form-edit");

const closeEditProfileButton = document.querySelector(".modal__container_close-button");

const profileName = document.querySelector(".profile__header");

const profileJob = document.querySelector(".profile__description");

const nameInput = document.querySelector(`.form__input[name="name"]`);

const jobInput = document.querySelector(`.form__input[name="description"]`);

// Open Profile Modal

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function openProfileModal() {
  const profileName = document.querySelector(".profile__header").textContent;
  const profileJob = document.querySelector(".profile__description").textContent;
  const nameInput = document.querySelector('.form__input[name="name"]');
  const jobInput = document.querySelector('.form__input[name="description"]');
  nameInput.value = profileName;
  jobInput.value = profileJob;
  openModal(editProfilePopUp);
  console.log(123);
}

editProfileButton.addEventListener("click", openProfileModal);

// Close Profile Modal

function closeModal(modal) {
  modal.classList.remove("modal_opened");
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

  closeProfileModal();
}

saveProfileEditForm.addEventListener("submit", handleProfileFormSubmit);

// Cards

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

// Template of Cards

const cardsList = document.querySelector(".cards__list");

initialCards.forEach((cardObject) => {
  const card = getCardElement(cardObject);
  cardsList.appendChild(card);
});

function getCardElement(data) {
  const cardElement = document.querySelector("#card-template").content;
  const card = cardElement.querySelector(".card").cloneNode(true);

  const cardTitle = card.querySelector(".card__title");
  cardTitle.textContent = data.name;

  const cardImage = card.querySelector(".card__image");
  cardImage.setAttribute("src", data.link);
  cardImage.setAttribute("alt", `Photo of ${data.name}`);

  return card;
}