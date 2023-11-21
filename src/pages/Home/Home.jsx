import styles from './Home.module.css';
import { Outlet } from 'react-router-dom';
import NewHeader from '../../components/header/header';

function Home() {
    return (
        <div className='App'>
            <NewHeader />
            <Outlet />
            <h1>Footer</h1>
        </div>
    )
}

export default Home;