"use client"
import { userCreate } from '@/lib/user-api/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function SignUp() {
 const router = useRouter()

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [message, setMessage] = useState('')

const handleSubmit = async (e) => {
  e.preventDefault()

  // Simple validation
  if (!name || !email || !password) {
    setMessage('Please fill all fields.')
    return
  }

  const userData = { name, email, password }

  try {
    const res = await userCreate(userData, router)
    console.log(res)

    setMessage('Signup successful! Redirecting to login...')
  } catch (error) {
    console.error(error)
    setMessage('Signup failed. Please try again.')
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-600 dark:text-gray-300">Username</label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter username"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-violet-600 outline-none"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-violet-600 outline-none"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600 dark:text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-md border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:border-violet-600 outline-none"
            />
          </div>

          <button className="block w-full p-3 text-center rounded-sm bg-violet-600 text-white hover:bg-violet-700 transition">
            Sign Up
          </button>
        </form>

        {message && <p className="text-center mt-2 text-green-500">{message}</p>}

        <p className="text-xs text-center sm:px-6 dark:text-gray-400 mt-4">
          Already have an account? <Link href="/login" className="underline text-violet-600">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
