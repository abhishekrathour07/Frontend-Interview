import Question19 from '@/components/Question19'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <div>
            <Template Heading='BMI calculator and Reusable Toast' solution={<Question19 />} nextQuestion='question20' />
        </div>
    )
}

export default page
