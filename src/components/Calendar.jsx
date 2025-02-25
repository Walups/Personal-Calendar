import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import NewEvent from "./NewEvent"
import { useState } from "react"

function Calendar ({events}) {

    const [isDialogOpen, setIsDialogOpen] = useState(true);


   function handleDateClick() {

       setIsDialogOpen(true);

    }


    return (

        <div className=" w-3x1" >

            <FullCalendar 
            
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                locales={"allLocales"}
                locale="pt-br"
                nowIndicator={true}
                now={new Date()}
                selectable={true}
                dateClick={handleDateClick}
                events={events}
                
                views={{
                    timeGridWeek: {
                        titleFormat: { year: 'numeric', month: 'long'}
                    },
                    
                }}
                buttonText={{
                        today: "Hoje",
                        month: "Mês",
                        week: "Semana",
                        day: "Dia",
                        list: "Lista"
                    }}   
                headerToolbar={{
                    left: 'dayGridMonth, timeGridWeek, timeGridDay',
                    center: 'title',
                    right: 'today, prev, next'

                    
                }}
            
            />

            <NewEvent  isOpen={isDialogOpen} onOpenChange={setIsDialogOpen}/>

        </div>   
    )
}

export default Calendar