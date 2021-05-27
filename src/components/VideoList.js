import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {
	const videoListItems = videos.map((video) => {
		return <VideoListItem video={video} />;
	});

	return (
		<div>
			<div className="ui relaxed divided list">{videoListItems}</div>
			<p>Listing a total of {videos.length} video(s).</p>
		</div>
	);
};

export default VideoList;
