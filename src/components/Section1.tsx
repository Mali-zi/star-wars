import React, { Component } from 'react';

const BASE_URL = 'https://swapi.dev/api/';

interface IProps {
  searchQuery: string;
  searchResponse: string;
  searchError:  string;

  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface IState {
  searchQuery: string;
  searchResponse: string;
  searchError:  string;
}

export default class Section1 extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchQuery: '',
      searchResponse: '',
      searchError: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchQuery: e.target.value });
  }

  componentDidMount() {}
  componentWillUnmount() {}

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    this.setState(state => ({
      const url = BASE_URL + this.state.searchQuery;

      fetch(url).then(response => {
        this.setState({
          searchResponse: response.data
        });
      })
    }));
  }

  fetchData(query: string) {
    const url = BASE_URL + this.state.searchQuery;
    await fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then(data => {
        this.setState({
          searchResponse: response.data
        });
      })
      .catch(err => console.error(err))
  }

  async function fetchData({ query }): Promise<void> {
    const results = await fetch("https://swapi.dev/api/planets/?page=1");
    const data = await results.json();
    console.log(data);
    let count = data.count;
    let next = data.next;
    let previous = data.previous;
    console.log(count);
    console.log(next);
    console.log(previous);
  }

  render() {
    return (
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
                value={this.state.searchQuery}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Search" />
          </form>
        </div>
      </section>
    );
  }
}
