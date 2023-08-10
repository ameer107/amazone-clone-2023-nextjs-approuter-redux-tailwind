import Header from "../components/header/Header"
import BottomHeader from "../components/header/BottomHeader"
import Footer from "../components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="font-bodyFont">
        <Header />
        <BottomHeader />
        <h1 className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-5 mb-5 font-semibold text-xl text-amazon_light">Products</h1>
        {children}
        <Footer />
    </body>
</html>
  )
}
