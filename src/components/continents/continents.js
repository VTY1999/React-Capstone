import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchFunc } from '../path';
import africa from '../../images/africa.png';
import asia from '../../images/asia.png';
import SouthAmerica from '../../images/SouthAmerica.png';
import NorthAmerica from '../../images/NorthAmerica.png';
import europe from '../../images/europe.png';
import oceania from '../../images/oceania.png';
import './continents.scss';

const Continents = ({ data }) => {
  const state = useSelector((state) => state.allReducer);
  const continents = Object.values(state.continents);

  const links = [
    {
      image: <img src={africa} alt="map" className="africa" />,
      path: '/africa',
      text: 'Africa',
      id: 0,
    },
    {
      image: <img src={asia} alt="map" className="asia" />,
      path: '/asia',
      text: 'Asia',
      id: 1,
    },
    {
      image: <img src={SouthAmerica} alt="map" className="southamerica" />,
      path: '/southamerica',
      text: 'South America',
      id: 2,
    },
    {
      image: <img src={NorthAmerica} alt="map" className="northamerica" />,
      path: '/northamerica',
      text: 'North America',
      id: 3,
    },
    {
      image: <img src={europe} alt="map" className="europe" />,
      path: '/europe',
      text: 'Europe',
      id: 4,
    },
    {
      image: <img src={oceania} alt="map" className="oceania" />,
      path: '/oceania',
      text: 'Oceania',
      id: 5,
    },
  ];

  return (
    <ul className="continents">
      {links.filter((link) => searchFunc(link, data)).map((item) => (
        <li key={item.text}>
          <NavLink to={item.path}>
            {item.image}
            {' '}
            {item.text}
          </NavLink>
          <small>
            {!state.loading && continents[item.id].length}
            {' '}
            countries
          </small>
        </li>
      ))}
    </ul>
  );
};

Continents.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Continents;
