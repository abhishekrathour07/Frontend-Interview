import Question17 from '@/components/Question17'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <Template Heading='Mortagues calculator and Password strength' solution={<Question17 />} nextQuestion='question18' />
    )
}

export default page
