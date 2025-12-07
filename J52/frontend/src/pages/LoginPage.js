import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/dashboard')
    }
  }, [navigate])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      const response = await api.post('/auth/login', { username, password })
      localStorage.setItem('token', response.data.token)
      navigate('/dashboard')
    } catch {
      setError('Invalid login')
    }
  }

  return (
    <div>
      <h1>J52 Login</h1>
      <form onSubmit={handleSubmit} aria-label="Login form">
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        {error && <p role="alert">{error}</p>}
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default LoginPage
