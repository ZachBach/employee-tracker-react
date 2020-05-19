import React, { useContext } from 'react';
import '../styles/Search.css';
import SearchContext from '../utils/SearchContext';

const SearchDOB = () => {
  const context = useContext(SearchContext);

  return (
    <div className='searchbox'>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id=''>
            DOB
          </span>
        </div>
        <input
          type='date'
          className='form-control'
          onChange={(e) => context.SearchChange(e)}
        />
      </div>
    </div>
  );
};
export default SearchDOB;
