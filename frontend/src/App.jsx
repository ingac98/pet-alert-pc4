import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import ReportLostPet from './pages/ReportLostPet.jsx';
import ReportSighting from './pages/ReportSighting.jsx';
import ImageSearch from './pages/ImageSearch.jsx';
import Caregivers from './pages/Caregivers.jsx';
import LostPetHistory from './pages/LostPetHistory.jsx';

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

    if (currentPage === 'history') {
      return <LostPetHistory />;
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
