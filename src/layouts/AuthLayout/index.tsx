import { ReactNode } from "react"

import levvaCoinsLogo from "../../assets/logo.svg"
import { AuthBackground, AuthContent, AuthWrapper } from "./styles";

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export function AuthLayout({ title, subtitle, children}: AuthLayoutProps) {
    return (
        <AuthBackground>
            <AuthWrapper>
                <header>
                    <img src={levvaCoinsLogo} alt="levva coins" />
                </header>
                
                <AuthContent>
                    <div>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                {children}
                </AuthContent>
            </AuthWrapper>
        </AuthBackground>
    )
}