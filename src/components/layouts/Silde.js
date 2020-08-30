import React from 'react';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';

const Silde = () => {
  return (
    <div>
      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleIndicators'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img className='d-block w-100' src={img2} alt='First slide' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Silde 1</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                iusto hic molestias! Vel officia quas earum mollitia temporibus,
                nisi, aliquam ut nostrum a id, obcaecati quisquam! Labore quae
                animi rerum?
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' src={img1} alt='Second slide' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Silde 2</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur illum doloribus atque quisquam voluptas dicta?
                Architecto placeat eos veritatis nesciunt nobis maiores vitae
                perferendis, non, fuga consequatur porro id odit.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' src={img2} alt='Third slide' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Silde 3</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                consectetur reiciendis molestiae iste culpa, dolorem ut. Officia
                quis at ratione maxime, voluptatem eligendi facilis voluptatibus
                recusandae nulla dolores quibusdam magnam?
              </p>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Silde;
