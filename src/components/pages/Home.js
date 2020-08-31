import React from 'react';
import Silde from '../layouts/Silde';
import servies1 from '../../img/servies1.png';
import servies2 from '../../img/servies2.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='section-home'>
        <Silde />
      </div>
      <div className='section-quotes'>
        <div className='half'>
          <div className='half-rect'></div>
          <div className='half-eclip'></div>
        </div>
        <div className='quotes'>
          " You can’t buy Love but you can buy handmade, and
          <br />
          that’s kind of a same think "
        </div>
        <div className='btn_buy'>Buy Now</div>
      </div>

      {/* SECTION SERVIES */}

      <div className='section-services'>
        <div className='heading-second title'>servies we offer</div>
        <div className='grid_home'>
          <div className='grid-content'>
            <img src={servies1} alt='IMG1' />
            <div className='title'>Dream Catchers</div>
          </div>
          <div className='grid-content'>
            <img src={servies2} alt='IMG1' />
            <div className='title'>Handmade Jewels</div>
          </div>
          <div className='grid-content'>
            <img src={servies1} alt='IMG1' />
            <div className='title'>Design Bags</div>
          </div>
          <div className='grid-content'>
            <img src={servies1} alt='IMG1' />
            <div className='title'>Dream Catchers</div>
          </div>
          <div className='grid-content'>
            <img src={servies2} alt='IMG1' />
            <div className='title'>Handmade Jewels</div>
          </div>
          <div className='grid-content'>
            <img src={servies1} alt='IMG1' />
            <div className='title'>Design Bags</div>
          </div>
        </div>
      </div>

      {/* WORK PROGRESS */}
      <div className='half-circle1'></div>
      <div className='section-work'>
        <div className='heading-second'>Our work process</div>
        <div className='content'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <div className='half-circle2'></div>
    </div>
  );
};

export default Home;
