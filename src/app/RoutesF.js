import { Route, Routes } from 'react-router-dom';

// Public Pages
import HeroF from '../pages/HeroF';
import AboutF from '../pages/AboutF';
import Classes from '../pages/Classes';
import Trainers from '../pages/Trainers';
import Schedules from '../pages/Schedules';
import ContactF from '../pages/ContactF';
import NoPageF from '../pages/NoPageF';

// Feature Modules
import AdminLogin from '../features/auth/AdminLogin';
import Dashboard from '../features/dashboard/Dashboard';
import WelcomeF from '../features/dashboard/WelcomeF';

import AddClass from '../features/classes/AddClass';
import Viewclasses from '../features/classes/Viewclasses';
import ClassDetails from '../features/classes/ClassDetails';

import Addschedules from '../features/schedules/Addschedules';
import Viewschedules from '../features/schedules/Viewschedules';

import AddTrainer from '../features/trainers/AddTrainer';
import ViewTrainer from '../features/trainers/ViewTrainer';

import ViewEnquiries from '../features/enquiries/ViewEnquiry';

const RoutesF = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path='/' element={<HeroF />} />
      <Route path='/about' element={<AboutF />} />
      <Route path='/classes' element={<Classes />} />
      <Route path='/classdetails/:id' element={<ClassDetails />} />
      <Route path='/trainers' element={<Trainers />} />
      <Route path='/schedules' element={<Schedules />} />
      <Route path='/contact' element={<ContactF />} />

      {/* Admin */}
      <Route path='/admin' element={<AdminLogin />} />

      {/* Dashboard Nested Routes */}
      <Route path='/dashboard' element={<Dashboard />}>
        <Route index element={<WelcomeF />} />
        <Route path='addclass' element={<AddClass />} />
        <Route path='viewclasses' element={<Viewclasses />} />
        <Route path='addschedules' element={<Addschedules />} />
        <Route path='viewschedules' element={<Viewschedules />} />
        <Route path='addtrainer' element={<AddTrainer />} />
        <Route path='viewtrainer' element={<ViewTrainer />} />
        <Route path='viewenquiries' element={<ViewEnquiries />} />
      </Route>

      {/* 404 */}
      <Route path='*' element={<NoPageF />} />

    </Routes>
  );
};

export default RoutesF;
