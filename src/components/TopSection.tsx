import React, { Component } from 'react';
import BottomSection from './BottomSection';

// interface IProps {
//   searchQuery: string;
//   searchResponse: string;
//   searchError: string;

//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

interface IState {
  value: string;
  searchQuery: string;
  searchError: string;
}

interface DefaultProps {}
interface Props extends DefaultProps {}

export default class TopSection extends Component<Props, IState> {
  public static readonly defaultProps = {};

  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      searchQuery: '',
      searchError: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fetchData = this.fetchData.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  componentDidMount() {}
  componentWillUnmount() {}

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      value: '',
      searchQuery: this.state.value,
    }));
  };

  // fetchData = async () => {
  //   const url = BASE_URL + this.state.searchQuery;
  //   await fetch(url)
  //     .then((resp) => {
  //       if (!resp.ok) {
  //         throw new Error(resp.statusText);
  //         console.log('resp.statusText', resp.statusText);
  //       }
  //       return resp.json();
  //     })
  //     .then((result) => {
  //       console.log('result.data', result);

  //       this.setState((prevState) => {
  //         return {
  //           ...prevState,
  //           searchResponse: result.data,
  //         };
  //       });
  //     })
  //     .catch((err) => console.error('err.message', err.message));
  // };

  // async function fetchData({ query }): Promise<void> {
  //   const results = await fetch("https://swapi.dev/api/planets/?page=1");
  //   const data = await results.json();
  //   console.log(data);
  //   let count = data.count;
  //   let next = data.next;
  //   let previous = data.previous;
  //   console.log(count);
  //   console.log(next);
  //   console.log(previous);
  // }

  render() {
    return (
      <div>
        <section>
          <div>Search for a movie</div>
          <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label>
                Enter a search query
                <input
                  type="text"
                  placeholder="tt0103064"
                  autoFocus
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Search" />
            </form>
          </div>
        </section>

        <BottomSection searchQuery={this.state.searchQuery} />
      </div>
    );
  }
}
