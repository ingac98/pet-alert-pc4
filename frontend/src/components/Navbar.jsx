function Navbar({ currentPage, setCurrentPage }) {
  const options = [
    { id: 'lost', label: 'Reportar perdida' },
    { id: 'sighting', label: 'Avistamiento' },
    { id: 'search', label: 'Buscar por imagen' },
    { id: 'caregivers', label: 'Cuidadores' }
  ];

  return (
    <nav className="navbar">
      {options.map((option) => (
        <button
          key={option.id}
          className={currentPage === option.id ? 'active' : ''}
          onClick={() => setCurrentPage(option.id)}
        >
          {option.label}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
