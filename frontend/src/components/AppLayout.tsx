import { Outlet } from 'react-router-dom';
import './AppLayout.css'; 

export const AppLayout = () => {

  return (
    <div className={`app-layout`}>
       <h2>Patients Health Care</h2>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;