import { debounce } from 'lodash';
import { useEffect, useRef, useState, type ReactElement } from 'react';
import Container from '../Container/Container';
import { StyledBoxesWrapper, StyledInputWrapper } from './SearchForDrinks.styled';
import useFetch from '../../hooks/useFetch';
import { type DrinksByName } from '../../utils/APIResponsesTypes';
import InputSearch from './InputSearch/InputSearch';
import SingleBox from '../SingleBox/SingleBox';

const SearchForDrinks = (): ReactElement => {
  const [value, setValue] = useState<string>('');
  const { data, fetcher } = useFetch<{ drinks: DrinksByName[] }>({ path: `/search.php?s=${value}`, enabled: false });
  const debouncedOnChange = useRef(debounce(fetcher, 700));

  useEffect(() => {
    if (value) {
      void debouncedOnChange.current(`/search.php?s=${value}`);
    }
  }, [value]);

  const { drinks } = data ?? {};

  return (
    <Container>
      <StyledInputWrapper>
        <InputSearch value={value} setValue={setValue} />
      </StyledInputWrapper>
      <StyledBoxesWrapper>
        {drinks === null && <div>no drinks in database</div>}

        {drinks?.map((drink: DrinksByName) => {
          return <SingleBox key={drink.idDrink} drinkName={drink.strDrink} drinkImageUrl={drink.strDrinkThumb} drinkID={drink.idDrink} />;
        })}
      </StyledBoxesWrapper>
    </Container>
  );
};

export default SearchForDrinks;
