import Question4 from '@/components/Question4'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
  return (
    <Template Heading="File-Folder Structure" solution={<Question4/>} nextQuestion='question5' />
    
  )
}

export default page
