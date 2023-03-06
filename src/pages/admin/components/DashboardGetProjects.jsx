import React, { useEffect } from 'react';
import { supabase } from '../../../supabase';
import Cards from './ProjectsCards';

function DashboardViewLists() {
  useEffect(() => {
    (async function getPosts() {
      const { data, error } = await supabase.from('projects').select('*');
      if (data) {
        console.log(data);
      }
      if (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className=" w-full max-w-5xl px-10 py-20  ">
        <Cards />
      </div>
    </>
  );
}

export default DashboardViewLists;
