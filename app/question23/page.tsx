import Question23 from '@/components/Question23'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
  return (
    <div>
      <Template Heading='Form Autofill' solution={<Question23/>} nextQuestion='question24'/>
    </div>
  )
}

export default page
