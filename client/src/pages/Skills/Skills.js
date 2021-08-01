import React, { useState } from 'react';
import {
  UilBracketsCurly,
  UilAngleDown,
  UilServerNetwork
} from '@iconscout/react-unicons';


export default function Skills(props) {
  const skillsDats = [
    {
      title: 'Frontend developer',
      subtitle: 'More than 4 years',
      icon: <UilBracketsCurly />,
      elements: [
        {
          name: 'HTML',
          pensent: '90%'
        },
        {
          name: 'CSS',
          pensent: '90%'
        },
        {
          name: 'JavaScript',
          pensent: '90%'
        },
        {
          name: 'ReactJs',
          pensent: '90%'
        }
      ]
    },
    {
      title: 'Backend developer',
      subtitle: 'More than 1 years',
      icon: <UilServerNetwork />,
      elements: [
        {
          name: 'Node.js',
          pensent: '90%'
        },
        {
          name: 'PHP',
          pensent: '90%'
        },
        {
          name: 'Python',
          pensent: '90%'
        },
        {
          name: 'npm',
          pensent: '90%'
        }
      ]
    }, {
      title: 'Backend developer',
      subtitle: 'More than 1 years',
      icon: <UilServerNetwork />,
      elements: [
        {
          name: 'Node.js',
          pensent: '90%'
        },
        {
          name: 'PHP',
          pensent: '90%'
        },
        {
          name: 'Python',
          pensent: '90%'
        },
        {
          name: 'npm',
          pensent: '90%'
        }
      ]
    }, {
      title: 'Backend developer',
      subtitle: 'More than 1 years',
      icon: <UilServerNetwork />,
      elements: [
        {
          name: 'Node.js',
          pensent: '90%'
        },
        {
          name: 'PHP',
          pensent: '90%'
        },
        {
          name: 'Python',
          pensent: '90%'
        },
        {
          name: 'npm',
          pensent: '90%'
        }
      ]
    }
  ]

  const [isHidden, setHidden] = useState(null);
  const openTab = e => setHidden(+e.target.dataset.index);

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="container skills__container grid">
        {
          skillsDats.map((item, i) => {
            return (
              <div className={isHidden ? "skills__content skills__open" : "skills__content skills__close"} key={i} >
                <div className="skills__header">
                  <div className="skills__icon">
                    {item.icon}
                  </div>
                  <div className="skills__head">
                    <h1 className="skills__title">{item.title}</h1>
                    <span className="skills__subtitle">{item.subtitle}</span>
                  </div>
                  <UilAngleDown
                    className="skills__arrow"
                    data-index={i}
                    onClick={openTab}/>
                </div>
                <div className="skills__list grid">
                  {
                    item.elements.map((elem, i) => {
                      return (
                        <div className="skills__data" key={i}>
                          <div className="skills__titles">
                            <h3 className="skills__name">{elem.name}</h3>
                            <span className="skills__nubmer">{elem.pensent}</span>
                          </div>
                          <div className="skills__bar">
                            <span className="skills__percentage skills__html"></span>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </section >
  )
}
