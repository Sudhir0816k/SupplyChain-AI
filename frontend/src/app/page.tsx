"use client";
import { useEffect, useState } from "react";
import { api, Shipment, ExceptionAlert } from "../lib/api";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [exceptions, setExceptions] = useState<ExceptionAlert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ships, excs] = await Promise.all([
          api.getShipments(),
          api.getExceptions(),
        ]);
        setShipments(ships);
        setExceptions(excs);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleScan = async (id: string) => {
    alert("Triggering AI Scan for " + id);
    await api.monitorShipment(id);
    window.location.reload();
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Supply Chain Control Tower</h1>

      <section className={styles.section}>
        <h2>Active Exceptions ({exceptions.length})</h2>
        <div className={styles.grid}>
          {exceptions.map((ex) => (
            <div key={ex.exception_id} className={`${styles.card} ${styles.alert}`}>
              <h3>Shipment: {ex.shipment_id}</h3>
              <p>{ex.description}</p>
              <p>Severity: <strong>{ex.severity}</strong></p>
              <Link href={`/exceptions/${ex.exception_id}`}>
                <button className={styles.button}>Resolve</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Active Shipments</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Origin</th>
              <th>Dest</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((s) => (
              <tr key={s.shipment_id}>
                <td>{s.shipment_id}</td>
                <td>{s.origin}</td>
                <td>{s.destination}</td>
                <td>{s.status}</td>
                <td>
                  <button onClick={() => handleScan(s.shipment_id)} className={styles.smallBtn}>
                    Scan
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
