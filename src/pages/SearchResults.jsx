import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../components/container/Container'
import PostCard from '../components/PostCard';

const SearchResults = () => {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

  if(searchResults.length === 0)
    {
        return(
            <h3>No mathching results found!</h3>
        )
    }

  return (
    <div>
      <h2>Search Results</h2>
            <div className='flex flex-wrap'>
                {searchResults.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>

    </div> 
          
  );
};

export default SearchResults;
