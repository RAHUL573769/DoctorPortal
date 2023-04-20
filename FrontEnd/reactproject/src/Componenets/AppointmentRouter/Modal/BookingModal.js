import { format } from 'date-fns';
import React from 'react';

const BookingModal = (props) => {
    console.log(props.treatment);
    const{slots}=props.treatment;
    console.log(slots)
const date=format(props.props.selected,'PP');
   
    return (
        <div>
        

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{props.treatment.name}</h3>
  <form className='grid gap-3 grid-cols-1' >
  <input disabled type="text" placeholder="Type here" value={date} className="input w-full " />
 
  <select className="select w-full max-w-xs">
  {
slots.map((slot)=>  <option value={slot} className="select w-full max-w-xs" >{slot}</option>
)
  }
  
</select>
  <input type="text" placeholder="Type here" className="input w-full" />
  <input type="text" placeholder="Type here" className="input w-full" />
  <input type="text" placeholder="Type here" className="input w-full" />
  <input type="text" placeholder="Type here" className="input w-full" />
  <br />
<input className=' btn btn-accent w-full' type="submit" value="Submit" />
  </form>
  </div>
</div>  
        </div>
    );
};

export default BookingModal;