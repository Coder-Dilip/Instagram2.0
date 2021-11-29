import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
function index() {
  return (
    <div className='bg-gray50 h-screen overflow-y-scroll scrollbar-hide' >
    <head>
      <title>Instagram</title>
      <description>Instagram clone build using next js, tailwindcss, and firebase</description>
    </head>
    <div>
      <Header/>
      <Feed />
    </div>
    </div>
  )
}

export default index
