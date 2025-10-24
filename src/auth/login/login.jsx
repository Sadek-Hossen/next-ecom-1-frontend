"use client"
import { loginUser } from '@/lib/user-api/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setMessage("Please fill in all fields")
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const userData = { email, password }
      const res = await loginUser(userData, router)
      console.log(res.data)

      setMessage("User login successful ")
    } catch (error) {
      console.error(error)
      setMessage("Login failed. Please check your credentials.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-4 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-600 dark:bg-gray-700 focus:border-violet-600 focus:ring focus:ring-violet-200 outline-none"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-600 dark:bg-gray-700 focus:border-violet-600 focus:ring focus:ring-violet-200 outline-none"
            />
          </div>

          <button
            disabled={loading}
            className="block w-full p-3 text-center rounded-sm bg-violet-600 text-white hover:bg-violet-700 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && <p className="text-center mt-3 text-sm text-green-500 dark:text-green-400">{message}</p>}

        <p className="text-xs text-center dark:text-gray-400 mt-4">
          Don't have an account?{' '}
          <Link href="/register" className="underline text-violet-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
