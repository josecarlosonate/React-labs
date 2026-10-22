function App() {

  return (
    <>
      <div className="bg-light min-vh-100 py-4">
        {/* Contenedor Principal */}
        <div className="container" style={{ maxWidth: '1200px' }}>
          {/* ENCABEZADO */}
          <header className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center gap-2">
              <div className="bg-primary text-white p-2 rounded-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-check2-square fs-5"></i>
              </div>
              <div>
                <h1 className="h4 fw-bold mb-0 text-dark">Task Manager</h1>
                <p className="text-muted small mb-0">Organiza tus tareas y mantente productivo</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="btn-group bg-white p-1 rounded-3 shadow-sm" style={{ fontSize: '14px' }}>
                <button type="button" className="btn btn-primary btn-sm rounded-2 px-3 fw-medium">Todas</button>
                <button type="button" className="btn btn-link text-secondary btn-sm text-decoration-none px-3 fw-medium">Pendientes</button>
                <button type="button" className="btn btn-link text-secondary btn-sm text-decoration-none px-3 fw-medium">Completadas</button>
              </div>
              <button type="button" className="btn btn-white bg-white border-0 shadow-sm rounded-3 px-2 py-1">
                <i className="bi bi-moon-stars text-secondary fs-5"></i>
              </button>
            </div>
          </header>

          {/* CUERPO PRINCIPAL (2 Columnas) */}
          <div className="row g-4">

            {/* COLUMNA IZQUIERDA: Formulario y Lista */}
            <div className="col-lg-8">
              {/* Formulario Agregar Tarea */}
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                <h5 className="fw-bold mb-3 text-dark">Agregar nueva tarea</h5>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control bg-light border-light py-2" placeholder="Título de la tarea *" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control bg-light border-light" rows={3} placeholder="Descripción (opcional)"></textarea>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div style={{ width: '200px' }}>
                      <label className="form-label text-muted small fw-medium mb-1">Prioridad</label>
                      <select className="form-select bg-light border-light">
                        <option>🚩 Media</option>
                        <option>🚩 Alta</option>
                        <option>🚩 Baja</option>
                      </select>
                    </div>
                    <div className="d-flex gap-2 align-self-end">
                      <button type="button" className="btn btn-light px-4 text-secondary fw-medium">Limpiar</button>
                      <button type="button" className="btn btn-primary px-4 fw-medium">➕ Agregar tarea</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Encabezado del Listado y Buscador */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0 text-dark">Mis tareas (5)</h5>
                <div className="position-relative" style={{ width: '250px' }}>
                  <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                  <input type="text" className="form-control bg-white border-light rounded-3 ps-5" placeholder="Buscar tareas..." />
                </div>
              </div>
              {/* Lista de Cards */}
              <div className="d-flex flex-column gap-3">
                {/* Tarea 1 */}
                <div className="card border-0 shadow-sm rounded-4 p-3 d-flex flex-row align-items-start justify-content-between">
                  <div className="d-flex gap-3 align-items-start">
                    <input type="checkbox" className="form-check-input mt-1 border-secondary" style={{ width: '20px', height: '20px' }} />
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
                {/* Tarea 2 */}
                <div className="card border-0 shadow-sm rounded-4 p-3 d-flex flex-row align-items-start justify-content-between">
                  <div className="d-flex gap-3 align-items-start">
                    <input type="checkbox" className="form-check-input mt-1 border-secondary" style={{ width: '20px', height: '20px' }} />
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
                {/* Tarea 3 (Completada) */}
                <div className="card border-0 shadow-sm rounded-4 p-3 d-flex flex-row align-items-start justify-content-between bg-white">
                  <div className="d-flex gap-3 align-items-start">
                    <input type="checkbox" className="form-check-input mt-1 border-primary" defaultChecked style={{ width: '20px', height: '20px' }} />
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

            {/* COLUMNA DERECHA: Resumen y Filtros */}
            <div className="col-lg-4">
              {/* Sección Resumen */}
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                <h5 className="fw-bold mb-3 text-dark">Resumen</h5>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="p-3 bg-light rounded-4 d-flex align-items-center gap-3">
                      <div className="text-primary fs-3"><i className="bi bi-list-task"></i></div>
                      <div>
                        <h4 className="fw-bold mb-0">5</h4>
                        <p className="text-muted small mb-0">Total tareas</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-light rounded-4 d-flex align-items-center gap-3">
                      <div className="text-warning fs-3"><i className="bi bi-clock"></i></div>
                      <div>
                        <h4 className="fw-bold mb-0">3</h4>
                        <p className="text-muted small mb-0">Pendientes</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-light rounded-4 d-flex align-items-center gap-3">
                      <div className="text-success fs-3"><i className="bi bi-check-circle"></i></div>
                      <div>
                        <h4 className="fw-bold mb-0">1</h4>
                        <p className="text-muted small mb-0">Completadas</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-light rounded-4 d-flex align-items-center gap-3">
                      <div className="text-danger fs-3"><i className="bi bi-flag"></i></div>
                      <div>
                        <h4 className="fw-bold mb-0">1</h4>
                        <p className="text-muted small mb-0">Alta prioridad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Filtros Rápidos */}
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold mb-3 text-dark">Filtros rápidos</h5>
                <div className="list-group list-group-flush gap-1">
                  <button type="button" className="list-group-item list-group-item-action border-0 rounded-3 d-flex justify-content-between align-items-center bg-primary-subtle text-primary fw-medium py-2">
                    <span><i className="bi bi-card-list me-2"></i> Todas las tareas</span>
                    <span className="badge bg-transparent text-primary fw-bold">5</span>
                  </button>
                  <button type="button" className="list-group-item list-group-item-action border-0 rounded-3 d-flex justify-content-between align-items-center text-secondary py-2">
                    <span><i className="bi bi-clock me-2"></i> Solo pendientes</span>
                    <span className="fw-bold">3</span>
                  </button>
                  <button type="button" className="list-group-item list-group-item-action border-0 rounded-3 d-flex justify-content-between align-items-center text-secondary py-2">
                    <span><i className="bi bi-check-circle me-2"></i> Solo completadas</span>
                    <span className="fw-bold">1</span>
                  </button>
                  <button type="button" className="list-group-item list-group-item-action border-0 rounded-3 d-flex justify-content-between align-items-center text-secondary py-2">
                    <span><i className="bi bi-flag text-danger me-2"></i> Alta prioridad</span>
                    <span className="fw-bold">2</span>
                  </button>
                  <button type="button" className="list-group-item list-group-item-action border-0 rounded-3 d-flex justify-content-between align-items-center text-secondary py-2">
                    <span><i className="bi bi-flag text-warning me-2"></i> Media prioridad</span>
                    <span className="fw-bold">2</span>
                  </button>
                  <button type="button" className="list-group-item list-group-item-action border-0 rounded-3 d-flex justify-content-between align-items-center text-secondary py-2">
                    <span><i className="bi bi-flag text-success me-2"></i> Baja prioridad</span>
                    <span className="fw-bold">1</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
