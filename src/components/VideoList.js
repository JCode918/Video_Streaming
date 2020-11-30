import React from 'react'
import VideoItem from './VideoItem'

const VidoeList = ({ videos, onVideoSelect }) => {
    const renderedVideoList = videos.map((vid) => {
        return <VideoItem key={vid.id.videoId} onVideoSelect={onVideoSelect} video={vid} />
    });

    return (
        <div className="ui relaxed divided list">
            {renderedVideoList}
        </div>
    )

};

export default VidoeList; 