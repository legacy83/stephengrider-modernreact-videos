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

		this.setState({
			videos: response.data.items,
			selected: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selected: video });
	};

	componentDidMount() {
		this.onTermSubmit('dragon ball fighter z');
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selected} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							></VideoList>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
