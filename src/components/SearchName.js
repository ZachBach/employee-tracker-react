import React, { useContext } from 'react';
import SearchContext from '../utils/SearchContext';

const SearchName = () => {
  const context = useContext(SearchContext);

  return (
    <div className='searchbox'>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id=''>
            Search
          </span>
        </div>
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='name'
          aria-label='Search'
          onChange={(e) => context.SearchChange(e)}
        />
      </div>
    </div>
  );
};
export default SearchName;
