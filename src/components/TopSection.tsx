import React, { Component } from 'react';
import BottomSection from './BottomSection';
import { DefaultProps, ITopSectionState } from '../models/index';

interface Props extends DefaultProps {}

export default class TopSection extends Component<Props, ITopSectionState> {
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
