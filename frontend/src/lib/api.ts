const API_BASE_URL = "http://localhost:8000/api/v1";
const API_KEY = "secret-key";

const getHeaders = () => ({
    "X-API-Key": API_KEY,
    "Content-Type": "application/json",
});

export interface Shipment {
    shipment_id: string;
    origin: string;
    destination: string;
    status: string;
    eta: string;
    lat: number;
    lon: number;
}

export interface ExceptionAlert {
    exception_id: string;
    shipment_id: string;
    description: string;
    severity: string;
    detected_at: string;
    resolution_data: any[];
}

export const api = {
    getShipments: async (): Promise<Shipment[]> => {
        const res = await fetch(`${API_BASE_URL}/shipments`, {
            headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to fetch shipments");
        return res.json();
    },

    getExceptions: async (): Promise<ExceptionAlert[]> => {
        const res = await fetch(`${API_BASE_URL}/exceptions`, {
            headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to fetch exceptions");
        return res.json();
    },

    monitorShipment: async (shipmentId: string) => {
        const res = await fetch(`${API_BASE_URL}/shipments/${shipmentId}/monitor`, {
            method: "POST",
            headers: getHeaders(),
        });
        return res.json();
    },

    resolveException: async (exceptionId: string, optionId: string) => {
        const res = await fetch(
            `${API_BASE_URL}/exceptions/${exceptionId}/resolve?option_id=${optionId}`,
            { method: "POST", headers: getHeaders() }
        );
        return res.json();
    },

    getAuditLogs: async () => {
        const res = await fetch(`${API_BASE_URL}/audit-logs`, {
            headers: getHeaders(),
        });
        return res.json();
    },
};
