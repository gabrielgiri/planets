import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const [q, setQ] = useState('');

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: 'true '
    },
    {
      name: 'Climate',
      selector: 'climate',
      sortable: 'true '
    },
    {
      name: 'Diameter',
      selector: 'diameter',
      sortable: 'true '
    },
    {
      name: 'Gravity',
      selector: 'gravity',
      sortable: 'true '
    },
    {
      name: 'Sorbital Period',
      selector: 'sorbital_period',
      sortable: 'true '
    },
    {
      name: 'Population',
      selector: 'population',
      sortable: 'true '
    }
  ]

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch('http://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPlanets();

  }, [])

  function search(planets) {
    return planets.filter(row => row.name.toLowerCase().indexOf(q.toLowerCase()) > -1)
  }

  return (
    <div className="App container mt-3">

      <h1 className="display-5">Planest data using swapi.dev, React, Datatable and bootstrap</h1>
      <p className="lead">Hello, my name is Gabriel. I live in Rosario, Argentina. I am a systems engineer, musician, photographer and filmmaker. Also love running and big fan of Rosario Central</p>
      <h3>Search by Planet Name</h3>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      <div className="table-responsive">
        <DataTable
          striped={true}
          highlightOnHover={true}
          columns={columns}
          data={search(planets)}
          title='Planets Filter'
        />
      </div>
    </div>
  );
}

export default App;
