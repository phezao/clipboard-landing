import React from 'react';

const Center = (props) => {
  return (
    <div className="text-center mt-40 mb-24 px-2 lg:px-0">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-4">{props.title}</h1>
      <p className="font-thin lg:w-2/5 mx-auto">{props.content}</p>
    </div>
  )
}

export default Center;