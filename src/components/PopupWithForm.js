
function PopupWithForm({ title, name, children, buttonText, isOpen, onClose }) {
  return (
    <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form popup-profile" name={`popup_${name}`} noValidate>
          {children}
          <button type="submit" className="popup__button-save">{buttonText}</button>
        </form>
        <button type="button" aria-label="Close" className="popup__button-close" onClick={onClose}>
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;