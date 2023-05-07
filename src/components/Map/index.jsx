import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const Map = () => {
//   const position = [51.505, -0.09];

  return (
    <div className="max-h-[400px] max-w-[200px]">
      <MapContainer style={{ height: 80, width: 80 }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
