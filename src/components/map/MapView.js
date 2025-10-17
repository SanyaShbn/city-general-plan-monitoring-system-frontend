import { Map, Marker } from 'pigeon-maps';
import { useState } from 'react';

// Минск (координаты как пример)
const DEFAULT_CENTER = [53.9023, 27.5619];
const DEFAULT_ZOOM = 11;

export default function MapView({ center = DEFAULT_CENTER, zoom = DEFAULT_ZOOM, markers = [] }) {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <div style={{ height: '60vh', width: '100%', position: 'relative' }}>
      <Map 
        center={center} 
        zoom={zoom}
        height={400}
        onClick={() => setSelectedMarker(null)}
      >
        {markers.map((m, idx) => (
          <Marker 
            key={idx} 
            anchor={m.position}
            onClick={() => setSelectedMarker(idx)}
          />
        ))}
      </Map>
      
      {/* Кастомный попап */}
      {selectedMarker !== null && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'white',
          padding: '10px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}>
          <strong>{markers[selectedMarker]?.title || 'Объект'}</strong>
          <br />
          <button 
            onClick={() => setSelectedMarker(null)}
            style={{ marginTop: '5px', cursor: 'pointer' }}
          >
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
}
