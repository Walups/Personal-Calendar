import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"

function Calendar (){


    return (

        <div>

            <FullCalendar
            
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="timeGridDay"
                headerToolbar={{
                    right: 'dayGridMonth, timeGridWeek, timeGridDay'
                }}
            
            />

        </div>   
    )
}

export default Calendar