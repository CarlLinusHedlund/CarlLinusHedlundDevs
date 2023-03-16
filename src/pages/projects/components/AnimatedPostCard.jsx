import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import PostCard from './PostCard';

export default function AnimatedPostCard({ ...project }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
      transition={{ duration: 1, delay: 0 }}
    >
      <PostCard
        id={project.id}
        title={project.title}
        description={project.description}
        images={project.images}
        course={project.course}
        intro={project.intro}
      />
    </motion.div>
  );
}
