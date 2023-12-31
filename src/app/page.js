'use client'
import Header from './components/header/Header'
import BottomHeader from './components/header/BottomHeader'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Products from './products/page'
import  store from '../redux/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <BottomHeader />
      <div className='max-w-screen-2xl mx-auto'>
        <Banner />
        <div className='relative md:mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10'>
          <Products />
        </div>
      </div>
      <Footer />
    </Provider>
  )
}

