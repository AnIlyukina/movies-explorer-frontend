import React from 'react';

const useForm = () => {
  const [values, setValues] = React.useState({});

  const [errors, setErrors] = React.useState({});

  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    });

    setIsValid(e.target.closest('.form').checkValidity());
  };

  return {
    values,
    errors,
    handleChange,
    isValid,
    setValues,
    setErrors,
    setIsValid,
  };
};

export default useForm;
