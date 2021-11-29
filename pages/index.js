import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
function index() {
  return (
    <>
    <head>
      <title>Instagram</title>
      <description>Instagram clone build using next js, tailwindcss, and firebase</description>
    </head>
    <div>
      <Header/>
      <Feed />
    </div>
    </>
  )
}

export default index
