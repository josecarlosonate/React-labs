function TaskForm() {
    return (
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <h5 className="fw-bold mb-3 text-body">Agregar nueva tarea</h5>
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control task-form-field py-2" placeholder="Título de la tarea *" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control task-form-field" rows={3} placeholder="Descripción (opcional)"></textarea>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ width: '200px' }}>
                        <label className="form-label text-muted small fw-medium mb-1">Prioridad</label>
                        <select className="form-select task-form-field task-priority-select">
                            <option>🚩 Media</option>
                            <option>🚩 Alta</option>
                            <option>🚩 Baja</option>
                        </select>
                    </div>
                    <div className="d-flex gap-2 align-self-end">
                        <button type="button" className="btn task-form-clear px-4 fw-medium">Limpiar</button>
                        <button type="button" className="btn btn-primary px-4 fw-medium">
                            <i className="bi bi-plus-circle-fill  me-2" />
                            Agregar tarea
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TaskForm