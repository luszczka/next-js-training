import { type SearchTypeProps } from '../components/SearchForDrinks/SearchType.utils';

interface Props {
  searchType: SearchTypeProps;
  value: string;
}

export const CreateFetchURL = ({ searchType, value }: Props): string => {
  const fetchUrl = `${searchType.subdirectory}${searchType.query}${value}`;
  return fetchUrl;
};
