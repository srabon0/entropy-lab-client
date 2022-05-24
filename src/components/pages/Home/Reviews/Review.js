import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';

const Review = () => {
    const { isLoading, error, data:reviews } = useQuery('repoData', () =>
     fetch('http://localhost:5000/reviews').then(res =>
       res.json()
     )
   )
 
   if (isLoading) return <Loading></Loading>
 
   if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            {
                reviews.map(review=><></>)
            }
            
        </div>
    );
};

export default Review;