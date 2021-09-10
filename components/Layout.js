import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>ZTF's</span>
              <span>Home</span>
            </h1>
            <h2>Recipes</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 - ZTF's Recepies</p>
      </footer>
    </div>
  )
}