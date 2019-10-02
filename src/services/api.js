import axios from 'axios';

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`

export const fetchStory = async (id) => {
    const data = await axios.get(storyUrl +`/${id}.json`)

    return data;
}

export const fetchData = async () => {
    const data = await axios.get(newStoriesUrl)

    return data;
}