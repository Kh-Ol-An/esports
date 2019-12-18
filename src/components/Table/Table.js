import React from 'react';

import datas from '../../json/data.json';
import { ReactComponent as Shield } from '../../assets/svg/shield.svg';
import s from './Table.module.css';

const Table = () => {
  return (
    <div>
      <table className={s.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Channel</th>
            <th>
              <p>HW</p>
            </th>
            <th>
              <p>PV</p>
            </th>
            <th>
              <p>ACCV</p>
            </th>
            <th>
              <p>AT</p>
            </th>
            <th>
              <p>VG</p>
            </th>
            <th>
              <p>FG</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, id) => (
            <tr key={data.channel_id}>
              <td>{id + 1}</td>
              <td className={s.channel}>
                <img src={data.avatar_url} alt="avatar" width="40" />
                <div>
                  <p>
                    {data.channel_display_name}
                    {data.partner && <Shield />}
                  </p>
                  <p>
                    <span>{data.stream_language}</span> •{' '}
                    <span>{data.game_name}</span>
                  </p>
                </div>
              </td>
              <td>
                <span>{data.hours_watched.value}</span>
                <span>{data.hours_watched.previousPeriodDiffPercentage}%</span>
                <div className={s.line}>
                  <div className={s.perc} style={{ width: '70%' }}></div>
                </div>
              </td>
              <td>
                <span>{data.peak_viewers.value}</span>
                <span>{data.peak_viewers.previousPeriodDiffPercentage}%</span>
              </td>
              <td>
                <span>{data.avg_concurrent_viewers.value}</span>
                <span>
                  {data.avg_concurrent_viewers.previousPeriodDiffPercentage}%
                </span>
              </td>
              <td>
                <span>{data.air_time.value}</span>
                <span>{data.air_time.previousPeriodDiffPercentage}%</span>
              </td>
              <td>
                <span>{data.views_gain.value}</span>
                <span>{data.views_gain.previousPeriodDiffPercentage}%</span>
              </td>
              <td>
                <span>{data.followers_gain.value}</span>
                <span>{data.followers_gain.previousPeriodDiffPercentage}%</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
