import { type Dispatch, type SetStateAction, type ReactElement } from 'react';
import Badge from '../../Badge/Badge';
import { type SearchTypeProps, SearchTypeQuery, SearchTypeSubdirectory } from '../SearchType.utils';
import { StyledSearchTypeWrapper } from './SearchType.styles';

interface Props {
  setSearchType: Dispatch<SetStateAction<SearchTypeProps>>;
  searchType: SearchTypeProps;
}

const SearchTypes = ({ setSearchType, searchType }: Props): ReactElement => {
  return (
    <StyledSearchTypeWrapper>
      <Badge
        isActive={searchType.subdirectory === SearchTypeSubdirectory.search && searchType.query === SearchTypeQuery.name}
        onClick={() => {
          setSearchType({ subdirectory: SearchTypeSubdirectory.search, query: SearchTypeQuery.name });
        }}
        padding="10px"
      >
        Search by name
      </Badge>
      <Badge
        isActive={searchType.subdirectory === SearchTypeSubdirectory.search && searchType.query === SearchTypeQuery.firstLetter}
        onClick={() => {
          setSearchType({ subdirectory: SearchTypeSubdirectory.search, query: SearchTypeQuery.firstLetter });
        }}
        padding="10px"
      >
        Search by first letter
      </Badge>
      <Badge
        isActive={searchType.subdirectory === SearchTypeSubdirectory.filter && searchType.query === SearchTypeQuery.ingredient}
        onClick={() => {
          setSearchType({ subdirectory: SearchTypeSubdirectory.filter, query: SearchTypeQuery.ingredient });
        }}
        padding="10px"
      >
        Search by ingredient
      </Badge>
    </StyledSearchTypeWrapper>
  );
};

export default SearchTypes;
