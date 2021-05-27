import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const videoListItems = videos.map((video) => {
		return (
			<VideoListItem
				key={video.id.videoId}
				onVideoSelect={onVideoSelect}
				video={video}
			/>
		);
	});

	return (
		<div>
			<div className="ui relaxed divided list">{videoListItems}</div>
			<p>
				<strong>Listing a total of {videos.length} video(s).</strong>
			</p>
		</div>
	);
};

export default VideoList;
