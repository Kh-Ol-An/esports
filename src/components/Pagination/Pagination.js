import React from 'react';

import { ReactComponent as PaginationArrow } from '../../assets/svg/pagination-arrow.svg';
import { ReactComponent as Lock } from '../../assets/svg/lock.svg';
import s from './Pagination.module.css';

const Pagination = () => {
  return (
    <ul className={s.pagination}>
      <li>
        <PaginationArrow className={s.arrow_prev} />
      </li>
      <li className={s.num_active}>1</li>
      <li className={s.num}>2</li>
      <li className={s.num}>
        <Lock />
      </li>
      <li className={s.num_last}>
        <Lock />
      </li>
      <li>
        <PaginationArrow className={s.arrow_next} />
      </li>
    </ul>
  );
};

export default Pagination;
