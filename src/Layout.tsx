import { Header, Footer  } from './components';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}