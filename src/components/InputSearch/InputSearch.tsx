import { type ReactElement } from 'react';
import { StyledInput, StyledInputWrapper } from './InputSearch.styled';
import { type InputProps } from './InputSearch.type';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const debounce = require('lodash.debounce');

const InputSearch = ({ fetcher, value, setValue, ...other }: InputProps): ReactElement => {
  const updateInput = (inputValue: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(inputValue.target.value);
    void fetcher();
  };
  // const debouncedOnChange = debounce(updateInput, 700);

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
