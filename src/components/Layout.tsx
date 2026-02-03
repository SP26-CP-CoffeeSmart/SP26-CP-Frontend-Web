import { type ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useSidebar } from '../context/SidebarContext';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const { isCollapsed } = useSidebar();
    const sidebarWidth = isCollapsed ? 'ml-20' : 'ml-64';

    return (
        <div className="h-screen w-full bg-[#F9F9F9] flex flex-col">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />

                {/* Main Content */}
                <main className={`${sidebarWidth} flex-1 min-h-0 overflow-y-auto transition-all duration-300`}>
                    {children}
                </main>
            </div>
        </div>
    );
}
