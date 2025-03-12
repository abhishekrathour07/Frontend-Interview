import Question7 from '@/components/question7'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <Template Heading='Question' solution={<Question7 />} nextQuestion='question8' />
    )
}

export default page
