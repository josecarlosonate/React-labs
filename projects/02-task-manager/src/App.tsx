import { useEffect, useState } from "react"
import Header from "./components/Header"
import type { Theme } from "./types/Theme"
import type { Filters } from "./types/Filters"
import TaskForm from "./components/TaskForm"
import Summary from "./components/Summary"
import QuickFilters from "./components/QuickFilters"
import List from "./components/List"

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [filter, setFilter] = useState<Filters>('all')

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [theme])

  return (

    <div className="min-vh-100 bg-body-tertiary">
      <Header setTheme={setTheme} theme={theme} filter={filter} setFilter={setFilter} />
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <TaskForm />
            <List />
          </div>
          <div className="col-lg-4">
            <Summary />
            <QuickFilters />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
