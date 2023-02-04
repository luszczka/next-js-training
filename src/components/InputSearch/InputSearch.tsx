import { type ReactElement } from 'react';
import { StyledInput, StyledInputWrapper } from './InputSearch.styled';
import { type InputProps } from './InputSearch.type';

const InputSearch = ({ value, setValue, ...other }: InputProps): ReactElement => {
  const updateInput = (inputValue: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(inputValue.target.value);
  };

  return (
    <StyledInputWrapper>
      <StyledInput
        {...other}
        value={value}
        onChange={(data) => {
          updateInput(data);
        }}
      />
    </StyledInputWrapper>
  );
};

export default InputSearch;
