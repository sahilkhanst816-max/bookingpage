import axios from 'axios'

const localApiUrl = import.meta.env.DEV ? 'http://localhost:3000' : ''
const apiBaseUrl = import.meta.env.VITE_API_URL || localApiUrl

export const isApiConfigured = Boolean(apiBaseUrl)
export const apiSetupMessage = 'Backend online deploy nahi hai. Pehle backend ko Render/Railway par deploy karo, phir VITE_API_URL set karke frontend rebuild karo.'

export const api = axios.create({
  baseURL: apiBaseUrl,
})
