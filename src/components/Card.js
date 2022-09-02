function Card({ card, onCardClick }) {

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="cards__item">
      <img className="cards__image" src={card.link} alt={card.name} onClick={handleCardClick} />
      <button type="button" aria-label="Trash" className="cards__button-delete"></button>
      <div className="cards__caption">
        <h2 className="cards__title">{card.link}</h2>
        <div className="cards__like">
          <button type="button" aria-label="Like" className="cards__button-like"></button>
          <p className="cards__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}
export default Card;