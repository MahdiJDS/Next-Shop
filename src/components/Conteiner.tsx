import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
    <div className="min-h-full flex min-w-screen justify-center py-30">
        {children}
    </div>
    );
}
