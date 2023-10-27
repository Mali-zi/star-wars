import React, { Component } from 'react';
import PlanetList from './PlanetList';
import { IBottomSectionState, IBottomSectionProps } from '../models/index';

const BASE_URL = 'https://swapi.dev/api/planets/';

export default class BottomSection extends Component<
  IBottomSectionProps,
  IBottomSectionState
> {
  constructor(props: IBottomSectionProps) {
    super(props);
    this.state = {
      planets: null,
      isLoading: false,
      error: null,
    };
  }

  fetchData = async (url: string) => {
    this.setState({ isLoading: true });

    await fetch(url)
      .then((resp) => {
        this.setState({
          isLoading: false,
        });
        if (!resp.ok) {
          throw new Error('Server responds with error!');
        }
        return resp.json();
      })
      .then((result) => {
        this.setState({
          planets: result.results,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.fetchData(BASE_URL);
  }

  componentDidUpdate(prevProps: IBottomSectionProps) {
    // Обычное использование (не забудьте сравнить свойства):
    if (
      this.props.searchQuery !== prevProps.searchQuery &&
      this.props.searchQuery
    ) {
      const url = BASE_URL + '?search=' + this.props.searchQuery;
      this.fetchData(url);
    }
  }

  render() {
    const { planets, error, isLoading } = this.state;

    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>Error: {error.message}</h2>;
    }

    if (planets && planets.length) {
      return (
        <div>
          <PlanetList planets={planets} />
        </div>
      );
    } else {
      return <h2> Nothing found! </h2>;
    }

    // return (
    //   <div>
    //     Hello
    //     <PlanetList planets={planets} />
    //   </div>
    // );
  }
}
