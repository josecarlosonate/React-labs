export default function QuickFilters() {
    return (
        <div className="card border-0 shadow-sm rounded-4 p-4">
            <h5 className="fw-bold mb-4 text-body">Filtros rápidos</h5>
            <div className="d-flex flex-column gap-2">
                <button type="button"
                    className="btn border-primary-subtle text-primary bg-primary-subtle d-flex justify-content-between 
                        align-items-center py-2 px-3 rounded-3 fw-medium w-100 text-start">
                    <span className="d-flex align-items-center gap-2">
                        <i className="bi bi-card-list fs-5"></i> Todas las tareas
                    </span>
                    <span className="fw-bold">5</span>
                </button>
                <button type="button"
                    className="btn btn-light bg-body border d-flex justify-content-between align-items-center py-2 
                        px-3 rounded-3 text-secondary fw-normal w-100 text-start">
                    <span className="d-flex align-items-center gap-2 text-dark-emphasis">
                        <i className="bi bi-clock fs-5"></i> Solo pendientes
                    </span>
                    <span className="text-muted small">3</span>
                </button>
                <button type="button"
                    className="btn btn-light bg-body border d-flex justify-content-between align-items-center 
                        py-2 px-3 rounded-3 text-secondary fw-normal w-100 text-start">
                    <span className="d-flex align-items-center gap-2 text-dark-emphasis">
                        <i className="bi bi-check-lg fs-5 text-success"></i> Solo completadas
                    </span>
                    <span className="text-muted small">1</span>
                </button>
                <button type="button"
                    className="btn btn-light bg-body border d-flex justify-content-between align-items-center 
                        py-2 px-3 rounded-3 text-secondary fw-normal w-100 text-start">
                    <span className="d-flex align-items-center gap-2 text-dark-emphasis">
                        <i className="bi bi-flag-fill fs-5 text-danger"></i> Alta prioridad
                    </span>
                    <span className="text-muted small">2</span>
                </button>
                <button type="button"
                    className="btn btn-light bg-body border d-flex justify-content-between align-items-center 
                        py-2 px-3 rounded-3 text-secondary fw-normal w-100 text-start">
                    <span className="d-flex align-items-center gap-2 text-dark-emphasis">
                        <i className="bi bi-flag-fill fs-5 text-warning"></i> Media prioridad
                    </span>
                    <span className="text-muted small">2</span>
                </button>
                <button type="button"
                    className="btn btn-light bg-body border d-flex justify-content-between align-items-center 
                        py-2 px-3 rounded-3 text-secondary fw-normal w-100 text-start" >
                    <span className="d-flex align-items-center gap-2 text-dark-emphasis">
                        <i className="bi bi-flag-fill fs-5 text-success"></i> Baja prioridad
                    </span>
                    <span className="text-muted small">1</span>
                </button>
            </div>
        </div >
    )
}
