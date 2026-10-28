import Header from './Header.jsx'

function Content({ onAdminClick, children }) {
  return (
    <>
      <Header onAdminClick={onAdminClick} />
      <main className="site-main">{children}</main>
    </>
  )
}

export default Content