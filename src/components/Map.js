import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = ( props ) => {
  
  if (typeof window !== 'undefined') {
    return (
      <div className="map-container">
      <MapContainer center={[60.30069163013214, 5.339820340965894]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[60.30069163013214, 5.339820340965894]}>
            <Popup>
              <strong>SKJOLD HELSEHUS</strong>
              <div>SÆTERVEGEN 25</div>
              <div>5236 RÅDAL</div>
            </Popup>
        </Marker>
        </MapContainer>
    </div>
    )
  }
  return null
};

Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultBaseMap: PropTypes.string,
};

export default Map;