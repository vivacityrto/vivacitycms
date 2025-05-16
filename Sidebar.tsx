// src/components/common/Layout.tsx
import React, { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useAppContext } from '../contexts/AppContext'
import { useAnalyticsPageView } from '../hooks/useAnalyticsPageView'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user } = useAppContext()
  // track page views in production only
  useAnalyticsPageView()

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* left nav */}
      <Sidebar />

      {/* main area */}
      <div className="flex flex-col flex-1">
        {/* top bar */}
        <Header />

        {/* page content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
