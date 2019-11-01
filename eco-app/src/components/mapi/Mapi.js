import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
import plastika from '../../assets/images/plastika-icon.png';
import staklo from '../../assets/images/staklo-icon.png';
import metal from '../../assets/images/metal-icon.png';
import hartija from '../../assets/images/hartija-icon.png';

function Mapi() {
    return(
        <div className='mapi'>
            <Map center={[41.9830, 21.4409]} zoom={13} metaWheelZoom={true}>
              <Overlay anchor={[41.98854, 21.44999]} offset={[25, 50]}>
                  <img src={metal} width={50} height={50} alt='' />  
              </Overlay>
              <Overlay anchor={[41.99261, 21.49275]} offset={[25, 50]}>
                  <img src={hartija} width={50} height={50} alt='' />  
              </Overlay>
              <Overlay anchor={[41.95338, 21.49002]} offset={[25, 50]}>
                  <img src={hartija} width={50} height={50} alt='' />  
              </Overlay>
              <Overlay anchor={[41.99014, 21.49170]} offset={[25, 50]}>
                  <img src={metal} width={50} height={50} alt='' />  
              </Overlay>
              <Overlay anchor={[42.00712, 21.37231]} offset={[25, 50]}>
                <img src={staklo} width={50} height={50} alt='' />  
              </Overlay>
              <Overlay anchor={[41.96595, 21.47049]} offset={[25, 50]}>
                <img src={staklo} width={50} height={50} alt='' />  
              </Overlay>
              <Overlay anchor={[41.96436, 21.45593]} offset={[25, 50]}>
                <img src={plastika} width={50} height={50} alt='' />  
              </Overlay>
            </Map>
        </div>
    );
}
export default Mapi;