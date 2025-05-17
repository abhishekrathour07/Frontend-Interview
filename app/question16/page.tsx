import Question16 from '@/components/Question16'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
  return (
    <div>
      <Template Heading='Rating and StopWatch' solution={<Question16/>} nextQuestion='question17'/>
    </div>
  )
}

export default page
