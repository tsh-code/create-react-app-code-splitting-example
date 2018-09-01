import React from 'react';
import { LandingHeroComponent } from './hero/component';
import { LandingAboutComponent } from './about/component';

export class LandingComponent extends React.Component {

  render() {

    return (
      <div>
        <LandingHeroComponent />
        <LandingAboutComponent />
      </div>
    );
  }
}
