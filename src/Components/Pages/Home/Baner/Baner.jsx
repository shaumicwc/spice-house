// import React from 'react';


// const Banner = () => {
//     return (
//       <div className='w-full relative'>
//         <img style={{height: '85vh', filter: 'brightness(80%)' }} className='w-full' src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=80' alt="" />
//         <div className='absolute top-0 left-0 text-white text-left m-2'>
//           <h1 className='text-5xl font-bold m-10'>Food that reminds of <br />
//            YOUR HOME!!</h1>
//           <p className='text-lg font-bold m-10 '>We serve delicious food that will satisfy your taste buds.</p>
//         </div>
//       </div>
//     );
//   };
  

// export default Banner;

import React from 'react';

const Banner = () => {
  return (
    <div className='w-full relative'>
      <img style={{height: '85vh', filter: 'brightness(65%)' }} className='w-full' src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=80' alt="" />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center m-2'>
        <h1 className='text-5xl font-bold'>Food that reminds of YOUR HOME!!</h1>
        <p className='text-lg font-bold mt-10'>We serve delicious food that will satisfy your taste buds</p>
      </div>
    </div>
  );
};

export default Banner;







