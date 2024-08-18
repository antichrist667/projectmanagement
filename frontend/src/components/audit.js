import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuditLogs = () => {
  const [auditLogs, setAuditLogs] = useState([]);

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

  return (
    <div className="container mt-5">
      <h2>Audit Logs</h2>
      <ul className="list-group">
        {auditLogs.map(log => (
          <li key={log.id} className="list-group-item">
            User ID: {log.user_id} - Success: {log.success ? 'Yes' : 'No'} - Timestamp: {new Date(log.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuditLogs;
