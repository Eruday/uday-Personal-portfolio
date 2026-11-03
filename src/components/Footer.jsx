function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {year} Uday</p>
      </div>
    </footer>
  )
}

export default Footer