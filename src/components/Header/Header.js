import React from 'react';

import s from './Header.module.css';
import { ReactComponent as Filter } from '../../assets/svg/filter.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import { ReactComponent as Lock } from '../../assets/svg/lock.svg';

const Header = () => {
  return (
    <div className={s.hdr}>
      <div className={s.title_wrap}>
        <h1 className={s.main_title}>Top List</h1>
        <p className={s.text}>by Hours Watched, last 7 Days</p>
      </div>
      <div className={s.filter_wrap}>
        <Filter className={s.filter_svg} />
        <h3 className={s.filter_title}>Filter:</h3>
        <ul className={s.time}>
          <li className={s.time_item}>7 Days</li>
          {/* <li className={s.time_item}>24 Hours</li>
          <li className={s.time_item}>1 Hour</li> */}
          <Arrow className={s.arrow_svg} />
        </ul>
        <ul className={s.languages}>
          <Lock className={s.lock_svg} />
          <li className={s.languages_item}>All Languages</li>
          <Arrow className={s.arrow_svg} />
        </ul>
        <ul className={s.games}>
          <Lock className={s.lock_svg} />
          <li className={s.games_item}>All Games</li>
          <Arrow className={s.arrow_svg} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
