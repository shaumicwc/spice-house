import React from 'react';


const Banner2 = () => {
    return (
        <div className=' grid md:grid-cols-2 gap-5 m-32 '>

            <div>

                <h1 className='text-4xl font-bold uppercase'>Savor the Flavors: <br /> A Culinary Journey with <br /> <span className='text-red-900 uppercase'>Spice House </span> </h1>

                <p className='text-xl my-5 uppercase'>Where we explore diverse flavors, learn new techniques, <br /> and create memorable meals together. <br /> From savory to sweet, <br /> let's take our taste buds on an adventure and discover the joy of cooking</p>

               



            </div>

            <div>


            <img className='w-96 mt-24 mx-24' src= 'https://img.freepik.com/premium-photo/pretty-arab-woman-barbecue-chef-preparing-hot-dogs_1194-259564.jpg?w=2000' alt="" />
            </div>
            
        </div>
    );
};

export default Banner2;