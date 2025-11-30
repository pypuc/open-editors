import { Component } from 'react';

class Modal extends Component {
  state = {
    isOpen: false,
    timeLeft: 5, 
  };

  isModalOpen = () => this.setState({ isOpen: true });
  isModalClose = () => {
    this.setState({ isOpen: false });
    this.props.onClose && this.props.onClose();
  };

  modalKeyClose = (event) => {
    if (event.key === 'Escape') {
      this.isModalClose();
    }
  };

   startTimer = () => {
  };

  componentDidMount() {
    document.addEventListener('keydown', this.modalKeyClose);
    this.startTimer();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.modalKeyClose);
  }

  render() {
    return (
      <div>
        {this.state.isOpen && (
          <div className="modal-backdrop">
            <div className="modal-window">
              <h2>Модальне Вікно</h2>
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
