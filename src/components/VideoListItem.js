import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({ video, onVideoSelect }) => {
	const onVideoClick = () => onVideoSelect(video);

	return (
		<div className="item item--video" onClick={onVideoClick}>
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className="content">
				<p className="header">{video.snippet.title}</p>
			</div>
		</div>
	);
};

export default VideoListItem;
