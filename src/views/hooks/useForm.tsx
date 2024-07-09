import React from 'react';

type typesInput = {
  [key: string]: {
    regex: RegExp;
    message: string;
  };
};

const types: typesInput = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Por favor, insira um email válido.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Apenas números são aceitos.',
  },
};

const useForm = (type: string) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<null | string>(null);

  function validate(value: string | number) {
    if (!type) return true;
    if ((typeof value === 'string' && value.length === 0) || !value) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value.toString())) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(target: HTMLInputElement) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
