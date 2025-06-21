import Question25 from '@/components/Question25'
import Template from '@/Template/Template'
import React from 'react'

const page = () => {
    return (
        <div>

            <Template Heading='Pagination with show and sorting' solution={<Question25 />} nextQuestion='question26' />
        </div>
    )
}

export default page
