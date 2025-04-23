import { Navigate, Route, Routes } from 'react-router-dom';
import {AppLayout} from '../components/AppLayout';
import {Patients} from '../pages/patients/patients';
import { LabResults } from '../pages/labResult/labResults';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* App container route */}
      <Route path="/" element={<AppLayout />}>
      {/* Default redirect to patients */}
      <Route index element={<Navigate to="patients" replace />} />
      <Route path="patients" element={<Patients />}>
        <Route path=":patientId" element={<LabResults />} />
      </Route>
      </Route>
    </Routes>
  );
};
