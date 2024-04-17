import GoogleMapReact from "google-map-react";

export default function Map({ center, zoom }) {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* Add markers or other components here */}
      </GoogleMapReact>
    </div>
  );
}
