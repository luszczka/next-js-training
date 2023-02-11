export const enum SearchTypeSubdirectory {
  search = '/search.php',
  filter = '/filter.php',
}

export const enum SearchTypeQuery {
  ingredient = '?i=',
  firstLetter = '?f=',
  name = '?s=',
}

export interface SearchTypeProps {
  subdirectory: SearchTypeSubdirectory;
  query: SearchTypeQuery;
}

export interface SearchTypes {
  firstLetter: SearchTypeProps;
  ingredient: SearchTypeProps;
  name: SearchTypeProps;
}
