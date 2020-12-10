import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('youtube');

	useEffect(() => {
		setSelectedVideo(videos[0]); // This selects the first video provided by the useVideo hook
	}, [videos]);

	return (
		<div className='ui container'>
			<SearchBar onFormSubmit={search} />
			<div className='ui grid'>
				<div className='ui row'>
					<div className='eleven wide column'>
						<VideoDetail video={selectedVideo} />
					</div>
					<div className='five wide column'>
						<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
					</div>
				</div>
			</div>
		</div>
	);
};

//class App extends React.Component {
//state = { videos: [], selectedVideo: null };

// !!!!! The useEffect with an empty array behaves like componentDidMount()
// componentDidMount() {
// 	this.onTermSubmit('Youtube');
// }

// onTermSubmit = async (term) => {
// 	const response = await youtube.get('/search', {
// 		params: {
// 			q: term,
// 		},
// 	});
// 	this.setState({
// 		videos: response.data.items,
// 		selectedVideo: response.data.items[0],
// 	});
// };

// onVideoSelect = (video) => {
// 	this.setState({ selectedVideo: video });
// };

// 	render() {
// 		return (
// 			<div className='ui container'>
// 				<SearchBar onFormSubmit={this.onTermSubmit} />
// 				<div className='ui grid'>
// 					<div className='ui row'>
// 						<div className='eleven wide column'>
// 							<VideoDetail video={this.state.selectedVideo} />
// 						</div>
// 						<div className='five wide column'>
// 							<VideoList
// 								onVideoSelect={this.onVideoSelect}
// 								videos={this.state.videos}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default App;
