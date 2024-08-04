import React, { useState } from 'react';
import { getTrains } from '../../api';
import TrainList from './TrainList';

const TrainSearch = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [trains, setTrains] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await getTrains(source, destination);
      setTrains(response.data);
    } catch (error) {
      console.error('Failed to fetch trains', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
          <label>Source</label>
          <input type="text" value={source} onChange={(e) => setSource(e.target.value)} />
        </div>
        <div>
          <label>Destination</label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <button type="submit">Search</button>
      </form>
      <TrainList trains={trains} />
    </div>
  );
};

export default TrainSearch;
