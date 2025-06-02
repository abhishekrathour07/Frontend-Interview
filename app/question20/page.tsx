import Question20 from '@/components/Question20'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <div>
            <Template Heading='Data Table' solution={<Question20 />} nextQuestion='question22' />
        </div>
    )
}

export default page
