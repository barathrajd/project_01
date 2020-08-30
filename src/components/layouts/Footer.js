import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className='site-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <h6>About</h6>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                officia quos veniam animi sed nesciunt ipsam autem magni harum
                voluptatibus ullam suscipit expedita nostrum odio omnis eum
                earum vel asperiores, distinctio repudiandae qui, blanditiis
                quia aut obcaecati? Earum impedit obcaecati quisquam, porro quia
                autem beatae maxime in, ab quam mollitia atque cupiditate
                dolorum libero facilis. Repellat expedita quas, distinctio volup
                reprerum veniam voluptatibus
              </p>
            </div>

            <div className='col-xs-6 col-md-3'>
              <h6>Categories</h6>
              <ul className='footer-links'>
                <li>
                  <a href='/'>Diy Kits</a>
                </li>
                <li>
                  <a href='/'>Wooden</a>
                </li>
                <li>
                  <a href='/'>Hand Made</a>
                </li>
                <li>
                  <a href='/'>Wooden arts</a>
                </li>
              </ul>
            </div>

            <div className='col-xs-6 col-md-3'>
              <h6>Quick Links</h6>
              <ul className='footer-links'>
                <li>
                  <a href='/'>About Us</a>
                </li>
                <li>
                  <a href='/'>Contact Us</a>
                </li>
                <li>
                  <a href='/'>Contribute</a>
                </li>
                <li>
                  <a href='/'>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-sm-6 col-xs-12'>
              <p className='copyright-text'>
                Copyright &copy; 2020 All Rights Reserved by
                <a href='/'>Home</a>.
              </p>
            </div>
            <div className='col-md-4 col-sm-6 col-xs-12'>
              <ul className='social-icons'>
                <li>
                  <a className='facebook' href='/'>
                    <i className='fab fa-facebook' />
                  </a>
                </li>
                <li>
                  <a className='twitter' href='/'>
                    <i className='fab fa-twitter' />
                  </a>
                </li>
                <li>
                  <a className='dribbble' href='/'>
                    <i className='fab fa-youtube' />
                  </a>
                </li>
                <li>
                  <a className='linkedin' href='/'>
                    <i className='fab fa-linkedin' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
