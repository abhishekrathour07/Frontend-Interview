import Question5 from '@/components/Question5'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
  return (
   <Template Heading='Question5 :-Tab Trigger content view' solution={<Question5/>} nextQuestion='question6'/>
  )
}

export default page
