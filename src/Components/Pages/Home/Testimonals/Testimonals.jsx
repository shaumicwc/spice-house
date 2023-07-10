import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Testimonial = () => {
  return (

  <div>
      <Slide>
                <h1 className='text-5xl font-bold text-center m-10 uppercase'>review from our students</h1>
            </Slide>
  

    <div className=" m-10 grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-2xl p-6">
        <div className="mb-4">
          <img className="w-10 h-10 rounded-full mx-auto" src="https://publicdomainvectors.org/tn_img/female-user-icon.webp" alt=""/>
          <h3 className="text-lg font-semibold text-center mt-2">Emily Thompson</h3>
          <p className="text-gray-600 text-center">Yoga Enthusiast</p>
          <div className="flex justify-center mt-1 rating">
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600"  />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600"  />
          </div>
          <p className="text-gray-800 mt-4 p-5">
            "Spice House's Chef's Cooking Course exceeded my expectations with its user-friendly platform, comprehensive curriculum, and expert chef instructors. The course introduced me to a variety of cuisines and provided a strong foundation in culinary techniques. The inclusion of high-quality spices from Spice House added a delightful flavor to my dishes. I highly recommend this course to anyone looking to enhance their cooking skills."
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl p-6">
        <div className="mb-4">
          <img className="w-10 h-10 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfhgcaeJZpg_lS9NqX9vk2Lt5oO3_qnKzAtyzdj5b&s" alt="" />
          <h3 className="text-lg font-semibold text-center mt-2">Alex Rodriguez</h3>
          <p className="text-gray-600 text-center">Yoga Beginner</p>
          <div className="flex justify-center mt-1 rating">
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" checked />
          </div>
          <p className="text-gray-800 mt-4 p-5">
            "Enrolling in Spice House's Chef's Cooking Course was a game-changer for me. The course platform was easy to navigate, and the instructors were skilled and engaging. The course covered a range of techniques and cuisines, and the use of Spice House spices elevated the flavors. I highly recommend this course to all cooking enthusiasts."
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
