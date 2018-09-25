import React from 'react';
import { map } from 'lodash';
import { ManagerChartsSectionComponent } from './charts-section/component';
import styles from './style.module.scss';

const data = [
  {
    id: 1,
    name: 'Lorem',
    value: 1500,
  },
  {
    id: 2,
    name: 'Ipsum',
    value: 79,
    type: 'percentage',
  },
  {
    id: 3,
    name: 'Page views',
    value: 15001,
  }
];

export class ManagerComponent extends React.Component {

  render() {

    return (
      <div className={styles.manager}>
        <ManagerChartsSectionComponent />

        {map(data, (item) => <h1>{item.value}</h1>)}
      </div>
    )
  }
}
