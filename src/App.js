import React, { useEffect, useState } from 'react';

import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((t) => t.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      // console.log(tours);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }

  }

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='container text-center mt-5'>
          <h2>No tours left</h2>
          <button onClick={fetchTours} className='border-0 rounded bg-dark text-light p-3'>Refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main className='container'>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
