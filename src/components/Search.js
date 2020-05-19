import React, { useState, useEffect } from 'react';
import Table from './Table';
import Nav from './Nav';
import API from '../utils/API';
import '../styles/Search.css';
import SearchContext from '../utils/SearchContext';

const Search = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: 'desc',
    filteredUsers: [],
    headings: [
      { name: 'Image', width: '5%', order: 'desc' },
      { name: 'name', width: '15%', order: 'desc' },
      { name: 'phone', width: '10%', order: 'desc' },
      { name: 'email', width: '20%', order: 'desc' },
      { name: 'dob', width: '10%', order: 'desc' },
    ],
  });

  const sortFunction = (heading) => {
    let currentOrder = developerState.headings
      .filter((data) => data.name === heading)
      .map((data) => data.order)
      .toString();

    if (currentOrder === 'desc') {
      currentOrder = 'asc';
    } else {
      currentOrder = 'desc';
    }

    const sortedUsers = developerState.filteredUsers.sort();
    const updatedHeadings = developerState.headings.map((data) => {
      data.order = data.name === heading ? currentOrder : data.order;
      return data;
    });

    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
      headings: updatedHeadings,
    });
  };

  const SearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter((item) => {
      let values =
        item.name.first.toLowerCase() + ' ' + item.name.last.toLowerCase();
      if (values.indexOf(filter.toLowerCase()) !== -1) {
        return item;
      }
    });

    setDeveloperState({ ...developerState, filteredUsers: filteredList });
  };

  useEffect(() => {
    API.getUsers().then((results) => {
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }, []);

  return (
    <SearchContext.Provider
      value={{ developerState, SearchChange, sortFunction }}>
      <Nav />
      <div className='data-area'>
        {developerState.filteredUsers.length > 0 ? <Table /> : <div></div>}
      </div>
    </SearchContext.Provider>
  );
};

export default Search;
