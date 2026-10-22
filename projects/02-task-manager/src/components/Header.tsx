import type { Filters } from "../types/Filters";
import type { Theme } from "../types/Theme";

type ThemeProps = {
    toggleTheme: () => void
    theme: Theme
    filter: Filters
    setMainFilter: (value: Filters) => void
}

const mainFilters: { name: string, type: Filters }[] = [
    { name: 'Todas', type: 'all' },
    { name: 'Pendientes', type: 'pending' },
    { name: 'Completadas', type: 'completed' },
]

function Header({ toggleTheme, theme, filter, setMainFilter }: ThemeProps) {

    return (
        <header className="bg-body app-header">
            <div className="container py-3 d-flex justify-content-between align-items-center gap-3">

                <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px" }} >
                        <i className={`bi bi-clipboard-check fs-4 ${theme === 'dark' ? 'text-dark' : 'text-white'}`}></i>
                    </div>
                    <div>
                        <h1 className="h4 fw-bold mb-0 text-body">Task Manager</h1>
                        <p className="text-muted small mb-0">
                            Organiza tus tareas y mantente productivo
                        </p>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <div className="header-filters d-none d-md-flex bg-body p-1 rounded-3 shadow-sm gap-1 border" style={{ fontSize: '0.875rem' }}>
                        {mainFilters.map((item) => {
                            const isActive = item.type === filter
                            return (
                                < button key={item.type} type="button" onClick={() => setMainFilter(item.type)}
                                    className={`btn btn-sm px-3 py-1.5 fw-medium ${isActive
                                        ? " btn-primary  rounded-3 "
                                        : "btn-link text-secondary text-decoration-none"} `} >
                                    {item.name}
                                </button>
                            )
                        })}
                    </div>
                    <button type="button" onClick={toggleTheme}
                        className="theme-toggle btn btn-body bg-body border shadow-sm rounded-3 d-flex align-items-center justify-content-center"
                        style={{ width: '38px', height: '38px' }} >
                        <i className={`bi ${theme === 'dark' ? 'bi-sun text-warning' : 'bi-moon-stars text-secondary'} fs-5`}></i>
                    </button>
                </div>

            </div>
        </header >

    );
}

export default Header;
