import Question24 from '@/components/Question24'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
  return (
    <div>
      <Template Heading='UseRef working Principal' solution={<Question24 />} nextQuestion='question25' />
    </div>
  )
}

export default page
