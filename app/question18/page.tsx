import Question18 from '@/components/Question18'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
  return (
    <div>
       <Template Heading='Image Gallery' solution={<Question18/>} nextQuestion='question19'/>
    </div>
  )
}

export default page
