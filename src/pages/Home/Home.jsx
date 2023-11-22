import styles from './Home.module.css';
import { Outlet } from 'react-router-dom';
import NewHeader from '../../components/header/header';
import Footer from '../../components/footer/Footer';

function Home() {
    return (
        <div className='App'>
            <NewHeader />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Home;