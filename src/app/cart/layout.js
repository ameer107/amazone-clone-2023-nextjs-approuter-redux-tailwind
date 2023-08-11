"use client"
import Header from "../components/header/Header"
import BottomHeader from "../components/header/BottomHeader"
import Footer from "../components/Footer"
import store from '../../redux/store'
import { Provider } from 'react-redux'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-bodyFont">
        <Provider store={store}>
          <Header />
          <BottomHeader />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
