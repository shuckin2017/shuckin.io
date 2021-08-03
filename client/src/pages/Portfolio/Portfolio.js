import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import {
  UilEye,
  UilGithubAlt
} from '@iconscout/react-unicons'

import Photo from '../../assets/img/photo-1.png';
import Photo2 from '../../assets/img/photo-2.png';
import Photo3 from '../../assets/img/photo-3.png';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation]);

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most resent work</span>
      <div className="container portfolio__container">
        <div>
          
          <Swiper
            slidesPerView={1}
            navigation
            
          >
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={Photo2} alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title"> Modern Website</h3>
                  <p className="portfolio__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                  <div className="portfolio__buttons">
                    <a href="/" className="button-b button-b-flex button-small portfolio__button">
                      Demo<UilEye className="button__icon button-b__icon" />
                    </a>
                    <a href="/" className="button-b button-b-flex button-small portfolio__button">
                      Github<UilGithubAlt className="button__icon button-b__icon" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={Photo3} alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title"> Modern Website</h3>
                  <p className="portfolio__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="portfolio__buttons">
                    <a href="/" className="button-b button-b-flex button-small portfolio__button">
                      Demo<UilEye className="button__icon button-b__icon" />
                    </a>
                    <a href="/" className="button-b button-b-flex button-small portfolio__button">
                      Github<UilGithubAlt className="button__icon button-b__icon" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img src={Photo} alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title"> Modern Website</h3>
                  <p className="portfolio__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                  <div className="portfolio__buttons">
                    <a href="/" className="button-b button-b-flex button-small portfolio__button">
                      Demo<UilEye className="button__icon button-b__icon" />
                    </a>
                    <a href="/" className="button-b button-b-flex button-small portfolio__button">
                      Github<UilGithubAlt className="button__icon button-b__icon" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>


        </div>
      </div>
    </section>
  )
}
