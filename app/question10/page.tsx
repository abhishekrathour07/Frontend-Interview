import Question10 from '@/components/Question10'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <div>
            <Template Heading='To Do list' solution={<Question10 />} nextQuestion='question11' />
        </div>
    )
}

export default page
