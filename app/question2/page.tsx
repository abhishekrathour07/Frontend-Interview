import Question2 from '@/components/Question2'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
  return (
    <Template Heading={`Question2 :- Dynamic Progess bar`} solution={<Question2/>} nextQuestion='question3'/>
  )
}

export default page
