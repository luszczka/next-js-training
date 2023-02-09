import { type Dispatch, type SetStateAction, type ReactElement } from 'react';
import Badge from '../../Badge/Badge';
import { type SearchTypeProps, SearchTypeQuery, SearchTypeSubdirectory } from '../SearchType.utils';
import { StyledSearchTypeWrapper } from './SearchType.styles';

interface Props {
  setSearchType: Dispatch<SetStateAction<SearchTypeProps>>;
}

const SearchTypes = ({ setSearchType }: Props): ReactElement => {

  return (
    <StyledSearchTypeWrapper>
      <Badge
        onClick={() => {
          setSearchType({ subdirectory: SearchTypeSubdirectory.search, query: SearchTypeQuery.name });
        }}
        padding="10px"
      >
        Search by name
      </Badge>
      <Badge
        onClick={() => {
          setSearchType({ subdirectory: SearchTypeSubdirectory.search, query: SearchTypeQuery.firstLetter });
        }}
        padding="10px"
      >
        Search by first letter
      </Badge>
    </StyledSearchTypeWrapper>
  );
};

export default SearchTypes;
