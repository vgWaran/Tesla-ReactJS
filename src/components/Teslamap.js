import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "83%",
  height: "500px",
  borderRadius: "12px",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const Teslamap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBGkWJH3mcfkr-yCVPYPxHO3ZyfS54Go3E">
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        {/* You can add custom markers here */}
      </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Teslamap;
