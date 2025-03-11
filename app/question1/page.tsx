import Question1 from '@/components/Question1'
import Template from '@/Template/Template'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Template Heading='Question1 :- Auto Suggestion Search Box' solution={<Question1/>} nextQuestion='question2'/>
    </div>
  )
}

export default Page
