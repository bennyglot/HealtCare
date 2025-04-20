import  { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppLayout = lazy(() => import('../components/AppLayout'));
const Patients = lazy(() => import('../pages/patients/patients'));
const LabResults = lazy(() => import('../pages/labResult/labResults'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="patients" element={<Patients />}>
            <Route path=":patientId/labs" element={<LabResults />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
