import Question12 from '@/components/Question12'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <div>
            <Template Heading='TransFer Box' solution={<Question12 />} nextQuestion='question13' />
        </div>
    )
}

export default page