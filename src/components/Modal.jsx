import { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  state = {
    timeLeft: 5,
  };

  modalKeyClose = (event) => {
    if (event.key === 'Escape') {
      this.handleClose();
    }
  };

  handleClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState((prev) => {
        const newValue = prev.timeLeft - 1;

        if (newValue <= 0) {
          clearInterval(this.timer);
          this.handleClose(); 
          return { timeLeft: 0 };
        }

        return { timeLeft: newValue };
      });
    }, 1000);
  };

  componentDidMount() {
    document.addEventListener('keydown', this.modalKeyClose);
    this.startTimer();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen === this.props.isOpen) {
      return;
    }

    if (this.props.isOpen === true) {
      clearInterval(this.timer);
      this.setState({ timeLeft: 5 });
      this.startTimer();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.modalKeyClose);
    clearInterval(this.timer);
  }

  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return (
      <div className="modal-backdrop">
        <div className="modal-window">
          <h2>Модальне Вікно</h2>
          <p>Таймер: {this.state.timeLeft}</p>

          <button onClick={this.handleClose}>Закрити</button>
        </div>
      </div>
    );
  }
}

export default Modal;
