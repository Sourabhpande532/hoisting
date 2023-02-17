import React from 'react';

import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import TaskList from '../components/TaskList/TaskList';

function Home() {
  return (
    <Layout>
      <Navbar />
      <TaskList />
    </Layout>
  );
}

export default Home;
