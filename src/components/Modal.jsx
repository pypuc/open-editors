import { Component } from 'react';

class Modal extends Component {
  state = {
    isOpen: false,
    timeLeft: 5, // тільки додав таймер, хочу щоб зменшувався
  };

  isModalOpen = () => this.setState({ isOpen: true });
  isModalClose = () => {
    // потім тут ще зупиню таймер
    this.setState({ isOpen: false });
    this.props.onClose && this.props.onClose();
  };

  startTimer = () => {
    // тільки почав — ще не робить
    // сюди поставлю interval потім
  };

  modalKeyClose = (event) => {
    if (event.key === 'Escape') {
      this.isModalClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.modalKeyClose);

    // починаю робити таймер
    this.startTimer();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.modalKeyClose);
    // тут потім очищу таймер
  }

  render() {
    return (
      <div>
        {this.state.isOpen && (
          <div className="modal-backdrop">
            <div className="modal-window">
              <h2>Модальне Вікно</h2>

              {/* просто вивів час — поки що не працює */}
              <p>Таймер: {this.state.timeLeft}</p>

              <button onClick={this.isModalClose}>Закрити</button>
            </div>
          </div>
        )}

        <button onClick={this.isModalOpen}>Відкрити модалку</button>
      </div>
    );
  }
}

export default Modal;
