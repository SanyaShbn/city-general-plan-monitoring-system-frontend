import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Минск (координаты как пример)
const DEFAULT_CENTER = [53.9023, 27.5619];
const DEFAULT_ZOOM = 11;

export default function MapView({ center = DEFAULT_CENTER, zoom = DEFAULT_ZOOM, markers = [] }) {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '60vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers.map((m, idx) => (
        <Marker key={idx} position={m.position}>
          <Popup>{m.title || 'Объект'}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
