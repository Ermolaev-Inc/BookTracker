import Head from "next/head";

export function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      { children }
    </>
  )
}