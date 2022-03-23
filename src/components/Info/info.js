import { useSelector } from 'react-redux';
import './info.scss';

const Details = () => {
  const components = [
    'Carbon monoxide',
    'Nitrogen monoxide',
    'Nitrogen dioxide',
    'Ozone',
    'Sulphur dioxide',
    'Fine particles matter',
    'Coarse particulate matter',
    'Ammonia',
  ];
  const state = useSelector(
    (state) => state.countryPollutionReducer.countryPollution,
  );

  return (
    <>
      <div className="heading">
        <img
          className="placeholder"
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="Placeholder"
        />
        <h1>
          {state.countryName && state.countryName.toUpperCase()}
          <br />
          <span>{`AQI: ${state.list && state.list[0].main.aqi}`}</span>
        </h1>
      </div>
      <h2 className="title">Country Air Quality Stats:</h2>
      <ul className="quality-grid">
        {state.list
          && Object.entries(state.list[0].components).map((component, index) => (
            <li key={component[0]}>
              {components[index]}
              :
              <br />
              {component[1]}
              {' '}
              μg/m3
            </li>
          ))}
      </ul>
    </>
  );
};
export default Details;
