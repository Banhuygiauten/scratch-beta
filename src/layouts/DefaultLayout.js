import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
    </div>
);

export default DefaultLayout;
