import React, {useEffect, useState} from 'react';
import {fetchData, fetchStory} from '../services/api';
import Story from '../components/Story';
import Pagination from '../components/Pagination';
import '../styles/storyContainerStyles.css';

const StoriesContainer = () => {
  //useState sets the initial state and return a 
  //tuple with state and method for setting the state
  //with useEffect we can handle lifecycle methods inside of functional 
  //components, mount/unmount/update
  //second parameter first holds the value wihich is initial state
  //then it holds value when props changes and components rerenders
  //when comparison is made and value differs
  //the first function is called
  const [storyIds, setStoryIds] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [storyPerPage] = useState(9)
  const [currentpageStart, setCurrentPageStart] = useState(1)
  const [currentPageEnd, setCurrentPageEnd] = useState(10)

  useEffect(() => {
    fetchData().then(({data}) => setStoryIds(data))
  }, [])

  const paginate = (pageNumer) => setCurrentPage(pageNumer);

  const previousPage = () => {
    setCurrentPage(currentPage-1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage+1)
  }

  const indexOfTheLastStory = currentPage * storyPerPage;
  const indexOfTheFirstStory = indexOfTheLastStory - storyPerPage;
  const currentStoryIds = storyIds.slice(indexOfTheFirstStory, indexOfTheLastStory+1)

  return (
    <div className="storyContainer">
      <h1 className="heading">Hacker News Stories</h1>
      {currentStoryIds.map(storyId => <Story key={storyId} storyId={storyId} />)}
      <Pagination storyPerPage={storyPerPage} totalStory={storyIds.length} 
          paginate={paginate} start={currentpageStart} end={currentPageEnd}
          previousPage={previousPage} nextPage={nextPage}/>
    </div>
  )
}

export default StoriesContainer;
