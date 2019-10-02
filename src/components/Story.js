import React, {useState, useEffect} from 'react';
import {fetchStory} from '../services/api';
import '../styles/storyStyles.css';

const Story = ({storyId}) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        fetchStory(storyId).then(({data}) => data && setStory(data))
    }, [])

    return story && story.url ? (
        <div className="storyDiv">
            <a href={story.url}><p className="title">{story.title}</p></a>
            <p className="autGen"><span className="by">By: </span> {story.by}
            <span className="gen">Genre: </span> {story.type}</p>
        </div>
    )   : null
}

export default Story;