import React from 'react';
import { map } from 'lodash';

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
      <div>
        {map(data, (item) => <h1>{item.value}</h1>)}
      </div>
    )
  }
}
