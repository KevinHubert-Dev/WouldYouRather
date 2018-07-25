import React from 'react'

import { Link } from 'react-router-dom'

const QuestionPreview = (props) => {
  return (
    <div className='flex-vertical flex-center'>
      <h1>Oops. There is no content for what you are looking for.</h1>
      <h2>Also known as "404 - Page not found"</h2>
      <Link to='/' className='submit-btn m-t-2'><h1 className='blue'>Let me take you home</h1></Link>
    </div>
  );
}

export default QuestionPreview