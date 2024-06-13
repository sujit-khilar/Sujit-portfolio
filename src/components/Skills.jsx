import React from 'react';
import skills from './Data/skills.json'

const Skills = () => {
  return (
    <>
      <section className="container skills" id='skills'>
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data) => (
            <>
              <div className="item" key={data.id} data-aos='flip-left'
                data-aos-duration='1000'>
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <p>{data.title}</p>
              </div>
            </>
          ))
          }
        </div>
      </section>
    </>
  )
}

export default Skills