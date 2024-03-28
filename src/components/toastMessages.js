import Toast from 'react-bootstrap/Toast';

function ToastMessages({ message }) {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Error Message</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default ToastMessages;