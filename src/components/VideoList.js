import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {
	const videoListItems = videos.map((video) => {
		return <VideoListItem />;
	});

	return (
		<div>
			{videoListItems}
			<p>Listing a total of {videos.length} video(s).</p>
		</div>
	);
};

export default VideoList;
