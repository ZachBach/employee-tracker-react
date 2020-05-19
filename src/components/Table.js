import React, { useContext } from 'react';
import Body from './Body';

import SearchContext from '../utils/SearchContext';

const Table = () => {
  const context = useContext(SearchContext);

  return (
    <div className='datatable mt-5'>
      <table
        id='table'
        className='table table-striped table-hover table-condensed'>
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className='col'
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name);
                  }}>
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>

        <Body />
      </table>
    </div>
  );
};

export default Table;
