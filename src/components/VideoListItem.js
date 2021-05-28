import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({ video, onVideoSelect }) => {
	const onVideoClick = () => onVideoSelect(video);

	return (
		<div className="item item--video" onClick={onVideoClick}>
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt=""
			/>
			<div className="content">
				<h5 className="header">{video.snippet.title}</h5>
			</div>
		</div>
	);
};

export default VideoListItem;
