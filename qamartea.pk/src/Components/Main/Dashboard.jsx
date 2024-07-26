import React from 'react';

const Dashboard = () => {
  const imageUrl = 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg';

  return (
    <div className='container flex border border-black p-8 mt-10 gap-4 '>
      <div>
        <h1 className='font-bold'>logo</h1>
        <h1>hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum assumenda commodi inventore ullam, fuga a iure odit minima, tempore impedit porro labore maxime voluptas officia? Possimus ad error neque at.</p>
      </div>
      <div>
        <img src={imageUrl} alt="View of street from a glass window" />
      </div>
    </div>
  )
}

export default Dashboard;
