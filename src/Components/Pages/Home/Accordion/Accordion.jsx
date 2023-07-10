import React from 'react';

const Accordion = () => {
  return (
    <div className='m-10'>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="my-accordion-2" defaultChecked />
        <div className="collapse-title shadow-2xl shadow-blue-200 text-xl font-medium">
          What will I learn in the chef course?
        </div>
        <div className="collapse-content">
          <p>You will learn various cooking techniques, knife skills, flavor combinations, and recipe creation.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title shadow-2xl shadow-blue-200 text-xl font-medium">
          Where can I apply my chef skills?
        </div>
        <div className="collapse-content">
          <p>You can apply your chef skills in restaurants, hotels, catering services, or even start your own culinary business.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title shadow-2xl shadow-blue-200 text-xl font-medium">
          Is the chef course suitable for beginners?
        </div>
        <div className="collapse-content">
          <p>Yes, the chef course is designed to cater to beginners and provide them with a strong foundation in culinary arts.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
