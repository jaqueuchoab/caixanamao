import Input from '../input/Input';
import { useFormStore } from '../../store/useFormStore';

const Credentials = () => {
  const { formData, setField } = useFormStore();

  return (
    <>
      <Input
        id="email"
        type="text"
        placeholder="Digite seu email"
        value={formData.email}
        onChange={(e) => setField('email', e.value)}
      />
      <Input
        id="password"
        type="password"
        placeholder="No mínimo 8 digitos"
        value={formData.senha}
        onChange={(e) => setField('senha', e.value)}
      />
      <Input
        id="password"
        type="password"
        placeholder="Confirme a senha"
        value={formData.senha_confirmacao}
        onChange={(e) => setField('senha_confirmacao', e.value)}
      />
    </>
  );
};

export default Credentials;
