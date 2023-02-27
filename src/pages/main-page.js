import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'

const MainPage = () => {

    const getAuthUser = () => {
        axios.get('/api/posts')
            .then((response) => {
                console.log(response);
        })
    }

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
            <button onClick={getAuthUser}>ボタン</button>
        </AppLayout>
    )
}

export default MainPage
