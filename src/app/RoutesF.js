// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import HeroF from "../pages/HeroF"
// import AboutF from '../pages/AboutF'   
// import Classes from '../pages/Classes'
// import Trainers from '../features/trainers/Trainers'
// import Schedules from '../pages/Schedules'
// import ContactF from '../pages/ContactF'
// import NoPageF from '../pages/NoPageF'
// import AdminLogin from '../features/auth/AdminLogin'
// import Dashboard from '../features/dashboard/Dashboard'
// import WelcomeF from '../features/dashboard/WelcomeF'
// import AddClass from '../features/classes/AddClass'
// import Viewclasses from '../features/classes/Viewclasses'
// import Addschedules from '../features/schedules/Addschedules'
// import Viewschedules from '../features/schedules/Viewschedules'
// import AddTrainer from '../features/trainers/AddTrainer'
// import ViewTrainer from '../features/trainers/ViewTrainer'
// import ViewEnquiries from '../features/enquiries/ViewEnquiry'
// import ClassDetails from '../features/classes/ClassDetails'

// const RoutesF = () => {
//   return (
//     <Routes>
//         <Route path='/' Component={HeroF}/>
//         <Route path='/about' Component={AboutF}/>
//         <Route path='/classes' Component={Classes}/>
//         <Route path='/classdetails/:id' element={< ClassDetails/>} />
//         <Route path='/trainers' Component={Trainers}/>
//         <Route path='/schedules' Component={Schedules}/>
//         <Route path='/contact' Component={ContactF}/>
//         <Route path='/admin' Component={AdminLogin}/>
//         <Route path='/dashboard' Component={Dashboard}>
//         <Route path='' Component={WelcomeF}/>
//         <Route path='addclass' Component={AddClass}/>
//         <Route path='viewclasses' Component={Viewclasses}/>
//         <Route path='addschedules' Component={Addschedules}/>
//         <Route path='viewschedules' Component={Viewschedules}/>
//         <Route path='addtrainer' Component={AddTrainer}/>
//         <Route path='viewtrainer' Component={ViewTrainer}/>
//         <Route path='viewenquiries' Component={ViewEnquiries}/>
//         </Route>
//         <Route path='*' Component={NoPageF}/>
//     </Routes>
//   )
// }

// export default RoutesF

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
