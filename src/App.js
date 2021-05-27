import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';

class App extends React.Component {
	state = { videos: [] };

	onTermSubmit = async (term) => {
		const response = await youtube('/search', {
			params: {
				q: term,
			},
		});

		this.setState({ videos: response.data.items });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<p>I have a total of {this.state.videos.length} video(s).</p>
			</div>
		);
	}
}

export default App;
