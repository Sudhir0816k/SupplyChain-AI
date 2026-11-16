"use client";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import styles from "./page.module.css";

export default function AuditPage() {
    const [logs, setLogs] = useState<any[]>([]);

    useEffect(() => {
        api.getAuditLogs().then(setLogs).catch(console.error);
    }, []);

    return (
        <main className={styles.container}>
            <h1>System Audit Logs</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Type</th>
                        <th>User</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log) => (
                        <tr key={log.id}>
                            <td>{new Date(log.timestamp).toLocaleString()}</td>
                            <td>{log.action_type}</td>
                            <td>{log.user_id || "System"}</td>
                            <td>
                                <pre className={styles.json}>{JSON.stringify(log.details, null, 2)}</pre>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
