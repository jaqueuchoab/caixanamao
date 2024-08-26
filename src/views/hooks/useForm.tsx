import React from 'react';

type typesInput = {
  [key: string]: {
    regex: RegExp;
    message: string;
    void: string;
  };
};

const types: typesInput = {
  name: {
    regex: /^[A-Za-z]+$/,
    message: 'Insira um nome válido',
    void: 'Insira seu nome',
  },
  cpf: {
    regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    message: 'Insira seu CPF corretamente',
    void: 'Insira seu CPF'
  },
  date: {
    regex: /^\d{4}\-\d{2}\-\d{2}$/,
    message: 'Preencha uma data válida',
    void: 'Insira sua data de nascimento'
  },
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Por favor, insira um email válido.',
    void: 'Insira um e-mail'
  },
  number: {
    regex: /^\d+$/,
    message: 'Apenas números são aceitos.',
    void: 'Preencha um valor'
  },
  password_login: {
    regex: /^.{8,}$/,
    message: 'Senha incorreta, tente novamente',
    void: 'Preencha sua senha'
  }
};

const useForm = (type: string) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<null | string>(null);

  function validate(value: string | number) {
    if (!type) return true;
    if ((typeof value === 'string' && value.length === 0) || !value) {
      setError(types[type].void);
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
