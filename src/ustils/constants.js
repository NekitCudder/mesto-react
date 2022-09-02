export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};

export const popupEditProfile = '.popup_edit-profile';
export const popupAddCard = '.popup_add-card';
export const popupOpenCard = '.popup_open-card';
export const popupChangeAvatar = '.popup_change-avatar';
export const buttonEditProfile = document.querySelector('.profile__button-edit');
export const buttonAddCard = document.querySelector('.profile__button-add');
export const nameInput = document.querySelector('.popup__input_text_name');
export const captionInput = document.querySelector('.popup__input_text_caption');
export const editTemplate = document.querySelector('.cards');
export const popupProfile = document.querySelector('.popup-profile');
export const popupCard = document.querySelector('.popup-card');
export const cardsLikeCounter = document.querySelector('.cards__like-counter');

export const popupDeleteCard = '.popup_delete-card';
export const popupAvatar = document.querySelector('.popup-avatar');
export const buttonChangeAvatar = document.querySelector('.profile__avatar-edit');