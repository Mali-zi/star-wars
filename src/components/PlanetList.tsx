import React, { Component } from 'react';
import { IPlanetListProps } from '../models/index';

export default class PlanetList extends Component<IPlanetListProps> {
  render() {
    const list = this.props.planets.map((planet, index) => (
      <li key={index}>{planet.name}</li>
    ));

    return <ul>{list}</ul>;
  }
}
