import axios from 'axios'

const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname)
const apiBaseUrl = import.meta.env.VITE_API_URL || (isLocalHost ? 'http://localhost:3000' : '')

export const isApiConfigured = Boolean(apiBaseUrl)
export const apiSetupMessage = 'Backend online deploy nahi hai. Pehle backend ko Render/Railway par deploy karo, phir VITE_API_URL set karke frontend rebuild karo.'

export const api = axios.create({
  baseURL: apiBaseUrl,
})
