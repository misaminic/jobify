import { useEffect } from 'react';

const Dashboard = () => {
  const fetchAPI = async () => {
    const req = await fetch('/api/v1');
    const data = await req.json();
    console.log(data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
