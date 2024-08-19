import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuditLogs = () => {
  const [auditLogs, setAuditLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(5); // Define cuántos logs quieres mostrar por página

  const auditServiceUrl = 'https://auditservice-zondeli7dq-uc.a.run.app/api/auditlogs';

  useEffect(() => {
    fetchAuditLogs();
  }, []);

  const fetchAuditLogs = async () => {
    try {
      const response = await axios.get(auditServiceUrl);
      setAuditLogs(response.data);
    } catch (error) {
      console.error('Error fetching audit logs:', error);
    }
  };

  // Obtener los logs actuales para la página actual
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = auditLogs.slice(indexOfFirstLog, indexOfLastLog);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Audit Logs</h2>
      <div className="card">
        <div className="card-body">
          <ul className="list-group">
            {currentLogs.map(log => (
              <li key={log.id} className="list-group-item">
                <strong>User ID:</strong> {log.user_id} <br />
                <strong>Email:</strong> {log.email || 'N/A'} <br />
                <strong>Success:</strong> {log.success ? 'Yes' : 'No'} <br />
                <strong>Timestamp:</strong> {new Date(log.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
          <Pagination 
            logsPerPage={logsPerPage} 
            totalLogs={auditLogs.length} 
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

// Componente de Paginación
const Pagination = ({ logsPerPage, totalLogs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="pagination justify-content-center">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AuditLogs;
