import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";

const BlogPage = () => {
  return (
      <AppLayout
          header={
              <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                  Blog Page
              </h2>
          }>
          <Head>
              <title>Blog Page</title>
          </Head>
      </AppLayout>
  )
}

export default BlogPage