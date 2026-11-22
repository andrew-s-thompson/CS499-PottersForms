import Header from './Header.jsx'

function Content({ children }) {
  return (
    <>
      <Header />
      <main className="site-main">{children}</main>
    </>
  )
}

export default Content