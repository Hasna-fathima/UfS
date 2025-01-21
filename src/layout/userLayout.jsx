import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom'


 const UserLayout=()=> {
  return (
    <div>
      <Header />
      <main>
      
      <Outlet /> 

      </main>
   
    
    </div>
  );
}

export default UserLayout