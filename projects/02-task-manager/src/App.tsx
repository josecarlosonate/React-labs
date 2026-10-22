import { useEffect, useState } from "react"
import Header from "./components/Header"
import type { Theme } from "./types/Theme"
import type { Filters } from "./types/Filters"

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [filter, setFilter] = useState<Filters>('all')

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [theme])

  return (

    <div className="min-vh-100 bg-body-tertiary">
      <Header setTheme={setTheme} theme={theme} filter={filter} setFilter={setFilter} />
    </div>

  )
}

export default App
