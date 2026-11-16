"use client";
import { useEffect, useState } from "react";
import { api, ExceptionAlert } from "../../../lib/api";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function ExceptionDetail({ params }: { params: { id: string } }) {
    const [exception, setException] = useState<ExceptionAlert | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchEx = async () => {
            // In real app, use getException(id) endpoint. Here we filter.
            const all = await api.getExceptions();
            const found = all.find((e) => e.exception_id === params.id);
            setException(found || null);
        };
        fetchEx();
    }, [params.id]);

    const handleResolve = async (optionId: string) => {
        if (!exception) return;
        try {
            await api.resolveException(exception.exception_id, optionId);
            alert("Resolution Executed Successfully!");
            router.push("/");
        } catch (e) {
            alert("Failed to resolve");
        }
    };

    if (!exception) return <div>Loading...</div>;

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Resolution Center</h1>

            <div className={styles.header}>
                <h2>Exception: {exception.description}</h2>
                <span className={styles.severity}>{exception.severity}</span>
            </div>

            <div className={styles.context}>
                <h3>AI Analysis</h3>
                <p>Detected at: {new Date(exception.detected_at).toLocaleString()}</p>
                <p>Impact: Supply Chain disruption likely.</p>
            </div>

            <h3>Recommended Resolutions</h3>
            <div className={styles.optionsGrid}>
                {exception.resolution_data && Array.isArray(exception.resolution_data) ? (
                    exception.resolution_data.map((opt: any) => (
                        <div key={opt.option_id} className={styles.optionCard}>
                            <h4>{opt.title}</h4>
                            <p>{opt.description}</p>
                            <div className={styles.score}>AI Score: {opt.score}/100</div>
                            <div className={styles.tradeoffs}>
                                {Object.entries(opt.trade_offs || {}).map(([k, v]) => (
                                    <span key={k} className={styles.chip}>{k}: {String(v)}</span>
                                ))}
                            </div>
                            <button onClick={() => handleResolve(opt.option_id)} className={styles.resolveBtn}>
                                Approve this Option
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No options generated. Please check backend logs.</p>
                )}
            </div>
        </main>
    );
}
