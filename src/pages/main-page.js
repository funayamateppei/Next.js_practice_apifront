import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const MainPage = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Main Page
                </h2>
            }>
            <Head>
                <title>Main Page</title>
            </Head>
        </AppLayout>
    )
}

export default MainPage
