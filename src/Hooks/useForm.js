import { useState } from 'react';

const useForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function handleChangeName(e) {
    if (e.target.value.length < 2) {
      setNameError('Длина имени не менее 2 символов');
    } else if (e.target.value.length > 30) {
      setNameError('Длина имени должна не более 30 символов');
    } else {
      setNameError('');
    }
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
      e.target.value,
    );

    if (!validEmail) {
      setEmailError('Неверный формат почты');
    } else {
      setEmailError('');
    }
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    if (e.target.value.length < 8) {
      setPasswordError('Пароль должен быть не менее 8 символов');
    } else {
      setPasswordError('');
    }
    setPassword(e.target.value);
  }
  return {
    name,
    email,
    password,
    nameError,
    emailError,
    passwordError,
    handleChangePassword,
    handleChangeEmail,
    handleChangeName,
    setName,
    setEmail,
    setPassword,
    setNameError,
    setEmailError,
    setPasswordError,
  };
};

export default useForm;
