import React from 'react';
import img3 from '../../img/img3.jpg';
import Silde from '../layouts/Silde';

const Home = () => {
  return (
    <div className='section-home container'>
      <Silde />
      <div className='grid_home'>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Home;
