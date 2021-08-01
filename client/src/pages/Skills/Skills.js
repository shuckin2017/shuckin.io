import React from 'react';
import {
  UilBracketsCurly,
  UilAngleDown,
  UilServerNetwork
} from '@iconscout/react-unicons';

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="container skills__container grid">
       
        <div className="skills__content">
          <div className="skills__header">
            <UilBracketsCurly className="skills__icon" />
            <div>
              <h1 className="skills__title">Frontend developer</h1>
              <span className="skills__subtitle">More than 4 years</span>
            </div>
            <UilAngleDown className="skills__arrow" />
          </div>
          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__nubmer">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__nubmer">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__nubmer">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">React</h3>
                <span className="skills__nubmer">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__js"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <div className="skills__header">
            <UilServerNetwork className="skills__icon" />
            <div>
              <h1 className="skills__title">Backend developer</h1>
              <span className="skills__subtitle">More than 1  years</span>
            </div>
            <UilAngleDown className="skills__arrow" />
          </div>
          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__nubmer">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__nubmer">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__nubmer">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">React</h3>
                <span className="skills__nubmer">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__js"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          
          <div className="skills__header">
            <UilBracketsCurly className="skills__icon" />
            <div>
              <h1 className="skills__title">Frontend developer</h1>
              <span className="skills__subtitle">More than 4 years</span>
            </div>
            <UilAngleDown className="skills__arrow" />
          </div>
          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__nubmer">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__nubmer">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__nubmer">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">React</h3>
                <span className="skills__nubmer">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skilla__percentage skills__js"></span>
              </div>
            </div>
          </div>
        </div>
      
      
      </div>
    </section >
  )
}
