import './Service.css';
import React, {useState} from 'react';

const ShowService = (props) => {

    const [show, setShow] = useState(false);
    const initialTextBtn = 'En savoir plus';
    const [button, setButton] = useState(initialTextBtn);

    const moreInfoHandler = ()=> {
        if(show === false){
            setButton('Cacher l\'infos');
            setShow(true);
        }else{
            setButton(initialTextBtn);
            setShow(false);
        }
    }


    return ( <div>
        <div key={props.service.id} className='services-items'>
                <div className='flex space-between'>
                    <h5 className='title-service service-elem'>{props.service.name}</h5>
                    <button className='inline service-elem btn-green' onClick={moreInfoHandler}>{button}</button>
                </div>
                <div style={{display: show ? "block" : "none"}} className='service-elem'>
                    <p>{props.service.description}</p>
                    {props.service.price > 0 && <p>Prix : {props.service.price}$</p>}
                </div>
            </div>
    </div> );
}
export default ShowService;