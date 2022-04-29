import React from 'react'
import { useGetHousesQuery } from '../services/housesApi';
import Loader from '../components/Loader';
import Cards from '../components/Cards';


const Homepage = () => {
  const { data } = useGetHousesQuery(10);
  console.log(data)

  if (!data) return <Loader />;

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
        <Cards posts={data} />
      </div>
    </>
  )
}

export default Homepage