import styles from './Home.module.css';
import { Outlet } from 'react-router-dom';
import NewHeader from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Visual from '../../components/visual/visual';

function Home() {
    return (
        <div className='App'>
            <NewHeader />
            <Visual/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Home;