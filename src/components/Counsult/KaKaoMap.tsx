import React from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import styled from 'styled-components'

const KaKaoMap = () => {
  return (
    <MapStyle center={{ lat: 37.56854785467383, lng: 126.98158346848766 }}>
      <MapMarker position={{ lat: 37.56854785467383, lng: 126.98158346848766 }} />
    </MapStyle>
  )
}

export default KaKaoMap

const MapStyle = styled(Map)`
  width: 100%;
  height: 568px;
`
