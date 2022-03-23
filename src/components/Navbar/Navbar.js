import { useNavigate } from 'react-router-dom';
import { IoColorPaletteSharp, IoCloseSharp, IoChevronBackSharp } from 'react-icons/io5';
import { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  const [modalVisible, setModalVisible] = useState(false);
  const [theme, setTheme] = useState({
    color: ['Pink', 'Blue'],
    isPink: true,
  });

  const handleTheme = () => {
    if (theme.isPink) {
      document.documentElement.style.setProperty('--primary-color', '#0c1a35');
      document.documentElement.style.setProperty(
        '--secondary-color',
        '#0c1a35',
      );
      document.documentElement.style.setProperty('--tertiary-color', '#1a2436');
      document.documentElement.style.setProperty(
        '--quaternary-color',
        '#0c1a35',
      );
    } else {
      document.documentElement.style.setProperty('--primary-color', '#7a183e');
      document.documentElement.style.setProperty(
        '--secondary-color',
        '#ad0247',
      );
      document.documentElement.style.setProperty('--tertiary-color', '#ac144e');
      document.documentElement.style.setProperty(
        '--quaternary-color',
        '#ac144e',
      );
    }
    setTheme({ ...theme, isPink: !theme.isPink });
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          {window.location.href !== 'https://verissimofrancis-air-pollution.netlify.app/' && window.location.href !== 'http://localhost:3000/' && (
            <IoChevronBackSharp
              className="nav-icon"
              onClick={() => navigate(-1)}
            />
          )}
        </li>
        <li className="nav-item">2022 stats</li>
        <li>
          <IoColorPaletteSharp
            data-testid="icon"
            className="nav-icon"
            onClick={() => setModalVisible(!modalVisible)}
          />
        </li>
      </ul>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="theme"
              onClick={handleTheme}
              type="button"
            >
              Change Theme To
              {' '}
              {theme.isPink ? theme.color[1] : theme.color[0]}
            </button>
            <IoCloseSharp
              className="close"
              onClick={() => setModalVisible(!modalVisible)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
