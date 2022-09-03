import React from "react";
import api from "../utils/Api";
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, data]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(data)
      })
      .catch((err) => {
        console.log(`Ошибка загрузки данных с сервера: ${err}`);
      });
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-info">
            <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
            <button type="button" aria-label="Edit" className="profile__avatar-edit" onClick={onEditAvatar}>
            </button>
          </div>
          <div className="profile__date">
            <div className="profile__name-edit">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" aria-label="Edit" className="profile__button-edit" onClick={onEditProfile}>
              </button>
            </div>
            <p className="profile__caption">{userDescription}</p>
          </div>
        </div>
        <button type="button" aria-label="Add" className="profile__button-add" onClick={onAddPlace}>
        </button>
      </section>

      <section className="elements">
        <ul className="cards">
          {cards.map((item) => {
            return <Card card={item} key={item._id} onCardClick={onCardClick} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;