// OnlineStatusContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

const OnlineStatusContext = createContext<boolean | null>(null);

export function useOnlineStatusContext() {
    const context = useContext(OnlineStatusContext);
    if (context === null) {
        throw new Error("useOnlineStatusContext must be used within an OnlineStatusProvider");
    }
    return context;
}

export const OnlineStatusProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

    useEffect(() => {
        const updateStatus = () => setIsOnline(navigator.onLine);

        window.addEventListener("online", updateStatus);
        window.addEventListener("offline", updateStatus);

        return () => {
            window.removeEventListener("online", updateStatus);
            window.removeEventListener("offline", updateStatus);
        };
    }, []);

    return (
        <OnlineStatusContext.Provider value={isOnline}>
            {children}

            {/* Automatically show offline banner */}
            {!isOnline && (
                <div
                    style={{
                        position: "fixed",
                        top: "60px",
                        left: 0,
                        right: 0,
                        background: "blue",
                        color: "#fff",
                        padding: "10px",
                        textAlign: "center",
                        fontWeight: "bold",
                        zIndex: 1000,
                    }}
                >
                    ⚠️ You are offline. Please check your internet connection.
                </div>
            )}
        </OnlineStatusContext.Provider>
    );
};
