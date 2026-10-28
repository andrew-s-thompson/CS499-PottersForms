import Header from './Header.jsx'

function Content({ page, onAdminClick, children }) {
  return (
    <>
      <Header page={page} onAdminClick={onAdminClick} />
      <main className="site-main">{children}</main>
    </>
  )
}

export default Content