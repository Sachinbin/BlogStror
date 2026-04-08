import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './routes/AppRoute.jsx'
import { BlogProvider } from './context/BlogContext.jsx'

createRoot(document.getElementById('root')).render(
    <BlogProvider>
        <AppRoute />
    </BlogProvider>
)
