import Question13 from '@/components/Question13'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <div>
            <Template Heading='Image Cursoul' solution={<Question13 />} nextQuestion='question13' />
        </div>
    )
}

export default page