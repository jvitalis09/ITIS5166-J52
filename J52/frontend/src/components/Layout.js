import { useNavigate } from 'react-router-dom'

function Layout({ children }) {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div>
      <nav aria-label="Main navigation">
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button onClick={() => navigate('/summary')}>Summary</button>
        <button onClick={() => navigate('/reports')}>Reports</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
