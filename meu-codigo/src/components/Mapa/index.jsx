import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Mapa = () => {
  return (
    <div className='mapDiv'>
      <MapContainer className='MapContainer' center={[-19.192595, -46.061072]} zoom={13} scrollWheelZoom={true} style={{ height: "180px", width: "180px" , display: 'flex'}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-19.192595, -46.061072]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    </div>
  )
}

export default Mapa