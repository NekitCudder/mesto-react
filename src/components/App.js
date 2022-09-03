import '../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null)
  }
  function onCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={onCardClick}
      />

      <Footer />

      <PopupWithForm
        title='Обновить аватар'
        name='change-avatar'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__container-input">
          <input id="popup__url-ava" type="url" name="avatar" className="popup__input popup__link-ava"
            placeholder="Ссылка на аватар" required />
          <span className="popup__error popup__url-ava-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title='Редактировать профиль'
        name='edit-profile'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__container-input">
          <input id="popup__profile" type="text" name="name" className="popup__input popup__input_text_name"
            placeholder="введите имя" minLength="2" maxLength="40" required />
          <span className="popup__error popup__profile-error"></span>
        </div>
        <div className="popup__container-input">
          <input id="popup__caption" type="text" name="about" className="popup__input popup__input_text_caption"
            placeholder="введите деятельность" minLength="2" maxLength="200" required />
          <span className="popup__caption-error popup__error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title='Новое место'
        name='add-card'
        buttonText='Добавить'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__container-input">
          <input id="popup__card" type="text" name="name" className="popup__input popup__name-card" placeholder="Название"
            minLength="2" maxLength="30" required />
          <span className="popup__error popup__card-error"></span>
        </div>
        <div className="popup__container-input">
          <input id="popup__url" type="url" name="link" className="popup__input popup__link-card"
            placeholder="Ссылка на картинку" required />
          <span className="popup__url-error popup__error"></span>
        </div>
      </PopupWithForm>


      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
