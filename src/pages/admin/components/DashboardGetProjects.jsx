import React, { useEffect, useState } from 'react';
import { supabase } from '../../../supabase';
import Card from './PostCard';

function DashboardViewLists() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function getPosts() {
      const { data, error } = await supabase.from('projects').select('*');
      if (data) {
        console.log(data);
        setPosts(data);
        console.log('posts: ', posts);
      }
      if (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="flex max-w-5xl flex-col gap-10 px-10 py-20 ">
      {posts.map((post) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Card key={post.id} {...post} />
      ))}
    </div>
  );
}

export default DashboardViewLists;
