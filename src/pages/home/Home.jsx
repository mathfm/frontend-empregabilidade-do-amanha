import React, { useEffect } from 'react';
import './Home.css'

function Home () {

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div id='home' className='home-section'>
        <div className='home-text'>
            <h1>Empregabilidade do Amanhã</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, molestiae. Voluptatem, facilis? Qui fuga porro ipsum, ut sequi consequatur, placeat, et ducimus nesciunt eaque amet. Odio officiis porro placeat pariatur?</p>
        </div>
        <a href="#competitions"><button className="home-button">Confira</button></a>
    </div>
  )
}

export default Home
