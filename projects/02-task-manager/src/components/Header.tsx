import type { Filters } from "../types/Filters";
import type { Theme } from "../types/Theme";

type HeaderProps = {
    setTheme: (value: Theme) => void
    theme: Theme
    filter: Filters
    setFilter: (value: Filters) => void
}

const mainFilters: { label: string; value: Filters }[] = [
    { label: 'Todas', value: 'all' },
    { label: 'Pendientes', value: 'pending' },
    { label: 'Completadas', value: 'completed' },
]

function Header({ setTheme, theme, filter, setFilter }: HeaderProps) {

    return (
        <header className="bg-body app-header">
            <div className="container py-3 d-flex justify-content-between align-items-center gap-3 style={{ maxWidth: '1200px' }}">

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
                            const isActive = item.value === filter
                            return (
                                < button key={item.value} type="button" onClick={() => setFilter(item.value)}
                                    className={`btn btn-sm px-3 py-1.5 fw-medium ${isActive
                                        ? " btn-primary  rounded-3 "
                                        : "btn-link text-secondary text-decoration-none"} `} >
                                    {item.label}
                                </button>
                            )
                        })}
                    </div>
                    <button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
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
