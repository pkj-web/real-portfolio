import Head from 'next/head'
//import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
//import About from '../components/About'
//import Projects from '../components/Projects'
//import Skills from '../components/Skills'
//import Contact from '../components/Contact'
//import Footer from '../components/Footer'
//import BackToTopButton from '../components/BackToTopButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-WHITE">
      <Head>
        <title>Peter-Karl Jackson - Portfolio</title>
        <meta name="description" content="Personal portfolio website" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      {/*<Navbar /> */}
      
      <main>
        <Hero />
        {/*<About />*/}
        {/*<Projects />*/}
        { /*<Skills /> */}
        {/*<Contact /> */}
      </main>

      {/*<Footer />
      <BackToTopButton /> */}
    </div>
  )
}