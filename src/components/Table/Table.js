import React from 'react';

import datas from '../../json/data.json';
import { ReactComponent as Shield } from '../../assets/svg/shield.svg';
import { ReactComponent as TopArrow } from '../../assets/svg/top-arrow.svg';
import { ReactComponent as BottomArrow } from '../../assets/svg/bottom-arrow.svg';
import s from './Table.module.css';

let maxNumHW = 0;
let maxNumPV = 0;
let maxNumACCV = 0;
let maxNumAT = 0;
let maxNumVG = 0;
let maxNumFG = 0;
datas.forEach(data => {
  data.hours_watched.value > maxNumHW && (maxNumHW = data.hours_watched.value);
  data.peak_viewers.value > maxNumPV && (maxNumPV = data.peak_viewers.value);
  data.avg_concurrent_viewers.value > maxNumACCV &&
    (maxNumACCV = data.avg_concurrent_viewers.value);
  data.air_time.value > maxNumAT && (maxNumAT = data.air_time.value);
  data.views_gain.value > maxNumVG && (maxNumVG = data.views_gain.value);
  data.followers_gain.value > maxNumFG &&
    (maxNumFG = data.followers_gain.value);
});

const Table = () => {
  return (
    <div className={s.table_outer}>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.fix}>#</th>
            <th>Channel</th>
            <th>
              <p className={s.main_name}>
                HW<span className={s.name}>Hours Watched</span>
              </p>
            </th>
            <th>
              <p className={s.main_name}>
                PV<span className={s.name}>Peak Viewers</span>
              </p>
            </th>
            <th>
              <p className={s.main_name}>
                ACCV<span className={s.name}>Avg Concurrent Viewers</span>
              </p>
            </th>
            <th>
              <p className={s.main_name}>
                AT<span className={s.name}>Air Time</span>
              </p>
            </th>
            <th>
              <p className={s.main_name}>
                VG<span className={s.name}>Views Gain</span>
              </p>
            </th>
            <th>
              <p className={s.main_name}>
                FG<span className={s.name}>Followers Gain</span>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, id) => {
            let percHW = 0;
            percHW = (data.hours_watched.value / maxNumHW) * 100;
            let percPV = 0;
            percPV = (data.peak_viewers.value / maxNumPV) * 100;
            let percACCV = 0;
            percACCV = (data.avg_concurrent_viewers.value / maxNumACCV) * 100;
            let percAT = 0;
            percAT = (data.air_time.value / maxNumAT) * 100;
            let percVG = 0;
            percVG = (data.views_gain.value / maxNumVG) * 100;
            let percFG = 0;
            percFG = (data.followers_gain.value / maxNumFG) * 100;

            let arrowHW;
            if (data.hours_watched.previousPeriodDiff > 0) {
              arrowHW = <TopArrow className={s.arrow} />;
            } else if (data.hours_watched.previousPeriodDiff < 0) {
              arrowHW = <BottomArrow className={s.arrow} />;
            } else {
              arrowHW = null;
            }
            let arrowPV;
            if (data.peak_viewers.previousPeriodDiff > 0) {
              arrowPV = <TopArrow className={s.arrow} />;
            } else if (data.peak_viewers.previousPeriodDiff < 0) {
              arrowPV = <BottomArrow className={s.arrow} />;
            } else {
              arrowPV = null;
            }
            let arrowACCV;
            if (data.avg_concurrent_viewers.previousPeriodDiff > 0) {
              arrowACCV = <TopArrow className={s.arrow} />;
            } else if (data.avg_concurrent_viewers.previousPeriodDiff < 0) {
              arrowACCV = <BottomArrow className={s.arrow} />;
            } else {
              arrowACCV = null;
            }
            let arrowAT;
            if (data.air_time.previousPeriodDiff > 0) {
              arrowAT = <TopArrow className={s.arrow} />;
            } else if (data.air_time.previousPeriodDiff < 0) {
              arrowAT = <BottomArrow className={s.arrow} />;
            } else {
              arrowAT = null;
            }
            let arrowVG;
            if (data.views_gain.previousPeriodDiff > 0) {
              arrowVG = <TopArrow className={s.arrow} />;
            } else if (data.views_gain.previousPeriodDiff < 0) {
              arrowVG = <BottomArrow className={s.arrow} />;
            } else {
              arrowVG = null;
            }
            let arrowFG;
            if (data.followers_gain.previousPeriodDiff > 0) {
              arrowFG = <TopArrow className={s.arrow} />;
            } else if (data.followers_gain.previousPeriodDiff < 0) {
              arrowFG = <BottomArrow className={s.arrow} />;
            } else {
              arrowFG = null;
            }

            return (
              <tr key={data.channel_id}>
                <td className={s.fix}>
                  {id + 1}
                  <div className={s.fix_img}>
                    <img src={data.avatar_url} alt="avatar" width="40" />
                  </div>
                </td>

                <td className={s.channel}>
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
                  <div className={s.data}>
                    <span>{data.hours_watched.value}</span>
                    <span>
                      {arrowHW}
                      {data.hours_watched.previousPeriodDiffPercentage}%
                    </span>
                  </div>
                  <div className={s.line}>
                    <div
                      className={s.hw_perc}
                      style={{ width: `${percHW}%` }}
                    ></div>
                  </div>
                </td>

                <td>
                  <div className={s.data}>
                    <span>{data.peak_viewers.value}</span>
                    <span>
                      {arrowPV}
                      {data.peak_viewers.previousPeriodDiffPercentage}%
                    </span>
                  </div>
                  <div className={s.line}>
                    <div
                      className={s.pv_perc}
                      style={{ width: `${percPV}%` }}
                    ></div>
                  </div>
                </td>

                <td>
                  <div className={s.data}>
                    <span>{data.avg_concurrent_viewers.value}</span>
                    <span>
                      {arrowACCV}
                      {data.avg_concurrent_viewers.previousPeriodDiffPercentage}
                      %
                    </span>
                  </div>
                  <div className={s.line}>
                    <div
                      className={s.accv_perc}
                      style={{ width: `${percACCV}%` }}
                    ></div>
                  </div>
                </td>

                <td>
                  <div className={s.data}>
                    <span>{data.air_time.value}</span>
                    <span>
                      {arrowAT}
                      {data.air_time.previousPeriodDiffPercentage}%
                    </span>
                  </div>
                  <div className={s.line}>
                    <div
                      className={s.at_perc}
                      style={{ width: `${percAT}%` }}
                    ></div>
                  </div>
                </td>

                <td>
                  <div className={s.data}>
                    <span>{data.views_gain.value}</span>
                    <span>
                      {arrowVG}
                      {data.views_gain.previousPeriodDiffPercentage}%
                    </span>
                  </div>
                  <div className={s.line}>
                    <div
                      className={s.vg_perc}
                      style={{ width: `${percVG}%` }}
                    ></div>
                  </div>
                </td>

                <td>
                  <div className={s.data}>
                    <span>{data.followers_gain.value}</span>
                    <span>
                      {arrowFG}
                      {data.followers_gain.previousPeriodDiffPercentage}%
                    </span>
                  </div>
                  <div className={s.line}>
                    <div
                      className={s.fg_perc}
                      style={{ width: `${percFG}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
