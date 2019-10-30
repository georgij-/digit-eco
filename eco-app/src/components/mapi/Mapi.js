import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';

function Mapi() {
    return(
        <div className='mapi'>
            <Map center={[41.9900, 21.4408]} zoom={13}  metaWheelZoom={true} mouseEvents={false}>
      <Marker anchor={[41.98854, 21.44999]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      <Marker anchor={[41.99261, 21.49275]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      <Marker anchor={[41.95338, 21.49002]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      <Marker anchor={[41.99014, 21.49170]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      <Marker anchor={[42.00712, 21.37231]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      <Marker anchor={[41.96595, 21.47049]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      <Marker anchor={[41.96436, 21.45593]} payload={1} onClick={({ event, anchor, payload }) => {}} />
   
      <Overlay anchor={[42.0050, 21.4408]} offset={[120, 79]}>
        <img src='pigeon.jpg' width={240} height={158} alt='' />
      </Overlay>
    </Map>
        </div>
    );
}

export default Mapi;