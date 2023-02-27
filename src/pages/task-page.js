import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

import React from 'react'

const BlogPage = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Task Page
                </h2>
            }>
            <Head>
                <title>Task Page</title>
            </Head>
        </AppLayout>
    )
}

export default BlogPage
