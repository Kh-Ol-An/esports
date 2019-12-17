import React from 'react';

import Header from './Header/Header';
import Pagination from './Pagination/Pagination';
import Table from './Table/Table';
import s from './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
