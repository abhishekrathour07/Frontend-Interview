import Question26 from '@/components/Question26'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <div>
            <Template Heading='Calender Month' solution={<Question26 />} nextQuestion='question27' />
        </div>
    )
}

export default page
