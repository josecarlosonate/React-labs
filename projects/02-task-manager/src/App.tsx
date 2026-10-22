import { useEffect, useState } from "react"
import Header from "./components/Header"
import type { Theme } from "./types/Theme"
import type { Filters } from "./types/Filters"

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [filter, setFilter] = useState<Filters>('all')

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [theme])

  function setMainFilter(filter: Filters) {
    setFilter(filter)
    //pendiente logica de filtrado
  }

  return (

    <div className="min-vh-100 bg-body-tertiary">
      <Header toggleTheme={toggleTheme} theme={theme} filter={filter} setMainFilter={setMainFilter} />
    </div>

  )
}

export default App
