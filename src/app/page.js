import Header from './components/header/Header'
import BottomHeader from './components/header/BottomHeader'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Products from './products/page'


export default function Home() {
  return (
    <>
      <Header />
      <BottomHeader />
      <div className='max-w-screen-2xl mx-auto'>
        <Banner />
        <div className='relative md:mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10'>
          <Products />
        </div>
      </div>
      <Footer />
    </>
  )
}

