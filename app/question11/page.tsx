import Question11 from '@/components/Question11'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <div>
            <Template Heading='Question 11 progress bar and transfer list' nextQuestion='question12' solution={<Question11 />} />
        </div>
    )
}

export default page
