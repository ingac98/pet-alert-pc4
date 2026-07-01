import { useState } from 'react';
import Navbar from './components/Navbar';
import ReportLostPet from './pages/ReportLostPet';
import ReportSighting from './pages/ReportSighting';
import ImageSearch from './pages/ImageSearch';
import Caregivers from './pages/Caregivers';

function App() {
  const [currentPage, setCurrentPage] = useState('lost');

  const renderPage = () => {
    if (currentPage === 'lost') {
      return <ReportLostPet />;
    }

    if (currentPage === 'sighting') {
      return <ReportSighting />;
    }

    if (currentPage === 'search') {
      return <ImageSearch />;
    }

    if (currentPage === 'caregivers') {
      return <Caregivers />;
    }

    return <ReportLostPet />;
  };

  return (
    <>
      <header className="header">
        <h1>PetAlert</h1>
        <p>Sistema de reporte de mascotas perdidas y alertas cercanas</p>
      </header>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="container">
        {renderPage()}
      </main>
    </>
  );
}

export default App;
