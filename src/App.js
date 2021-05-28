import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
	state = { videos: [], selected: null };

	onTermSubmit = async (term) => {
		const response = await youtube('/search', {
			params: {
				q: term,
			},
		});

		this.setState({ videos: response.data.items });
	};

	onVideoSelect = (video) => {
		this.setState({ selected: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoDetail video={this.state.selected} />
				<VideoList
					onVideoSelect={this.onVideoSelect}
					videos={this.state.videos}
				></VideoList>
			</div>
		);
	}
}

export default App;
