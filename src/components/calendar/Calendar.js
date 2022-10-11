import { useState } from 'react';
import Calendar from 'react-calendar';


function BookingCalendar() {
 const [date, setDate] = useState(new Date());

 return (
 <div className='app'>
   <div>
     <Calendar onChange={setDate} value={date} selectRange={true}/>
   </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toDateString()}
     &nbsp; to &nbsp;
     <span>End:</span> {date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Default selected date:</span>{' '} {date.toDateString()}
   </p>
        )}
 </div>
  );
}

export default BookingCalendar;