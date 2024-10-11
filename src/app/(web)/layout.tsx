import Header from '../_components/Header'
import Footer from '../_components/Footer'

function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default WebLayout
