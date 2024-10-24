import React from 'react'
const SectionHeading = ({heading}:{heading:string}) => {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8'>{heading}</h2>
  )
}

export default SectionHeading