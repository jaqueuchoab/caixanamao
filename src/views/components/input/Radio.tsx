import { RadioContainer, RadioInput, RadioLabel } from './RadioInput.style';

type RadioOption = {
  label: string;
  value: number;
};

type RadioProps = {
  options: RadioOption[];
  value: number;
  onChange?: (value: number) => void;
};

const Radio = ({ options, value, onChange }: RadioProps) => {
  return (
    <RadioContainer>
      {options.map((option) => (
        <RadioLabel key={option.value}>
          <RadioInput
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
          />
          {option.label}
        </RadioLabel>
      ))}
    </RadioContainer>
  );
};

export default Radio;
