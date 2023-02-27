import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="px-6 py-4">
                    {user ? (
                        <Link
                            href="/main-page"
                            className="text-xl px-4 py-2 text-white bg-gray-600 rounded">
                            Main Page
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-xl px-4 py-2 text-white bg-gray-600 rounded">
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="ml-4 text-xl px-4 py-2 text-white bg-gray-600 rounded">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
