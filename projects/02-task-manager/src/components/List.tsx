export default function List() {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0 text-dark">Mis tareas (5)</h5>
                <div className="position-relative w-50">
                    <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                    <input type="text" className="form-control bg-white border-light rounded-3 ps-5" placeholder="Buscar tareas..." />
                </div>
            </div>
            <div className="d-flex flex-column gap-3">
                <div className="card border-0 shadow-sm rounded-4 p-3 d-flex flex-row align-items-start justify-content-between">
                    <div className="d-flex gap-3 align-items-start">
                        <input type="checkbox" className="form-check-input mt-1 border-secondary fs-5" />
                        <div>
                            <h6 className="fw-bold mb-1 text-dark">Aprender React</h6>
                            <p className="text-muted small mb-2">Completar el laboratorio 02 y practicar los conceptos principales.</p>
                            <span className="text-muted small"><i className="bi bi-calendar3 me-1"></i> 28 oct. 2026</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-3 fw-bold">Alta</span>
                        <button type="button" className="btn btn-light text-secondary border-0 p-2 rounded-3"><i className="bi bi-pencil"></i></button>
                        <button type="button" className="btn btn-light text-danger border-0 p-2 rounded-3"><i className="bi bi-trash"></i></button>
                    </div>
                </div>
                <div className="card border-0 shadow-sm rounded-4 p-3 d-flex flex-row align-items-start justify-content-between">
                    <div className="d-flex gap-3 align-items-start">
                        <input type="checkbox" className="form-check-input mt-1 border-secondary fs-5" />
                        <div>
                            <h6 className="fw-bold mb-1 text-dark">Crear portafolio</h6>
                            <p className="text-muted small mb-2">Agregar nuevos proyectos y mejorar la sección de experiencia.</p>
                            <span className="text-muted small"><i className="bi bi-calendar3 me-1"></i> 30 oct. 2026</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-warning-subtle text-warning-emphasis px-3 py-2 rounded-3 fw-bold">Media</span>
                        <button type="button" className="btn btn-light text-secondary border-0 p-2 rounded-3"><i className="bi bi-pencil"></i></button>
                        <button type="button" className="btn btn-light text-danger border-0 p-2 rounded-3"><i className="bi bi-trash"></i></button>
                    </div>
                </div>
                <div className="card border-0 shadow-sm rounded-4 p-3 d-flex flex-row align-items-start justify-content-between bg-white">
                    <div className="d-flex gap-3 align-items-start">
                        <input type="checkbox" className="form-check-input mt-1 border-primary fs-5" defaultChecked />
                        <div>
                            <h6 className="fw-bold mb-1 text-dark text-decoration-line-through">Revisar documentación de Vite</h6>
                            <p className="text-muted small mb-2">Leer y tomar notas de la documentación oficial.</p>
                            <span className="text-muted small"><i className="bi bi-calendar3 me-1"></i> 25 oct. 2026</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-success-subtle text-success px-3 py-2 rounded-3 fw-bold">Baja</span>
                        <button type="button" className="btn btn-light text-secondary border-0 p-2 rounded-3"><i className="bi bi-pencil"></i></button>
                        <button type="button" className="btn btn-light text-danger border-0 p-2 rounded-3"><i className="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
