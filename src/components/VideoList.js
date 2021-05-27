import React from 'react';

const VideoList = (props) => {
	return (
		<div>
			<p>Listing a total of {props.videos.length} video(s).</p>
		</div>
	);
};

export default VideoList;
