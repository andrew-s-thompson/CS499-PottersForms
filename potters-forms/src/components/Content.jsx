import Header from './Header.jsx'

function Content({ children }) {
  return (
    <>
      <Header />
      <main className="site-main">
        {children}
        <footer className="page-foot">Potter's Wheel Ministries</footer>
      </main>
    </>
  )
}

export default Content