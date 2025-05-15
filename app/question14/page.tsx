import Question14 from '@/components/Question14'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <div>
            <Template Heading='Filter Option Cart' solution={<Question14 />} nextQuestion='question15' />
        </div>
    )
}

export default page
