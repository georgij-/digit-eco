import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';

function Mapi() {
    return(
        <div className='mapi'>
            <Map center={[42.0050, 21.4408]} zoom={13} metaWheelZoom={true}>
      <Marker anchor={[42.0050, 21.4408]} payload={1} onClick={({ event, anchor, payload }) => {}} />
   
      {/* <Overlay anchor={[42.0050, 21.4408]} offset={[120, 79]}>
        <img src='https://library.kissclipart.com/20180831/leq/kissclipart-rock-pigeon-clipart-homing-pigeon-pigeons-and-dove-d66e7a14b3f370d6.jpg' width={240} height={158} alt='' />
      </Overlay> */}
    </Map>
        </div>
    );
}

export default Mapi;