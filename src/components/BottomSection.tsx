import React, { Component } from 'react';

interface IBottomSectionProps {
  searchQuery: string;
}

const BASE_URL = 'https://swapi.dev/api/vehicles/';

export default class BottomSection extends Component<IBottomSectionProps> {
  constructor(props: IBottomSectionProps) {
    super(props);
  }

  fetchData = async (searchQuery: string) => {
    let url = BASE_URL;

    if (searchQuery) {
      url = BASE_URL + '?search=' + searchQuery;
    }
    await fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
          console.log('resp.statusText', resp.statusText);
        }
        const result = resp.json();
        return result;
      })
      .then((result) => {
        console.log('result.data', result);

        // this.setState((prevState) => {
        //   return {
        //     ...prevState,
        //     searchResponse: result.data,
        //   };
        // });
      })
      .catch((err) => console.error('err.message', err.message));
  };

  componentDidUpdate(prevProps: IBottomSectionProps) {
    // Обычное использование (не забудьте сравнить свойства):
    if (this.props.searchQuery !== prevProps.searchQuery) {
      this.fetchData(this.props.searchQuery);
    }
  }

  render() {
    const list = result.map((item, index) => {
      return <li key={index}>item</li>;
    });

    return <div>{list}</div>;
  }
}
