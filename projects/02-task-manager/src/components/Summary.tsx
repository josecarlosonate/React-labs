function Summary() {
    return (
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <h5 className="fw-bold mb-3 text-body">Resumen</h5>
            <div className="row g-3">
                <div className="col-6">
                    <div className="p-3 rounded-4 d-flex align-items-center gap-3 summary-total">
                        <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                            style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                            <i className="bi bi-list-task fs-5"></i>
                        </div>
                        <div>
                            <h4 className="fw-bold mb-0 summary-value">5</h4>
                            <p className="text-muted small mb-0" style={{ fontSize: '0.75rem' }}>Total tareas</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3 rounded-4 d-flex align-items-center gap-3 summary-pending">
                        <div
                            className="bg-white text-warning rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                            style={{ width: '40px', height: '40px', minWidth: '40px' }}
                        >
                            <i className="bi bi-clock-history fs-5"></i>
                        </div>
                        <div>
                            <h4 className="fw-bold mb-0 summary-value">3</h4>
                            <p className="text-muted small mb-0" style={{ fontSize: '0.75rem' }}>Pendientes</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3 rounded-4 d-flex align-items-center gap-3 summary-completed">
                        <div
                            className="bg-white text-success rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                            style={{ width: '40px', height: '40px', minWidth: '40px' }}
                        >
                            <i className="bi bi-check-circle-fill fs-5"></i>
                        </div>
                        <div>
                            <h4 className="fw-bold mb-0 summary-value">1</h4>
                            <p className="text-muted small mb-0" style={{ fontSize: '0.75rem' }}>Completadas</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3 rounded-4 d-flex align-items-center gap-3 summary-high">
                        <div
                            className="bg-white text-danger rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                            style={{ width: '40px', height: '40px', minWidth: '40px' }}
                        >
                            <i className="bi bi-flag-fill fs-5"></i>
                        </div>
                        <div>
                            <h4 className="fw-bold mb-0 summary-value">1</h4>
                            <p className="text-muted small mb-0" style={{ fontSize: '0.75rem' }}>Alta prioridad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary