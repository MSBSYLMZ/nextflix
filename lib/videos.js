import videos from '../data/videos.json';
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const getAPIUrl = query => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${YOUTUBE_API_KEY}`;
const POPULAR_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${YOUTUBE_API_KEY}`;

export const getVideos = async (searchQuery, isPopularVideos = false) => {
    return getVideosFromLocalData();
	const url = isPopularVideos ? POPULAR_VIDEOS_URL : getAPIUrl(searchQuery);
	try {
		const response = await fetch(url);
		const data = await response.json();
        console.log(data)
		if ("error" in data) return [];
		return data.items.map(item => ({ id: item.id.videoId, title: item.snippet.title, imgUrl: item.snippet.thumbnails.high.url }));
	} catch (error) {
		console.log(error);
		return [];
	}
};

const getVideosFromLocalData = () => {
    return videos.items.map(item => ({ id: item.id.videoId, title: item.snippet.title, imgUrl: item.snippet.thumbnails.high.url }));
}
