import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"

function Calendar (){


    return (

        <div className=" w-3x1" >

            <FullCalendar 
            
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="timeGridWeek"
                locales={"allLocales"}
                locale="pt-br"
                
                views={{
                    timeGridWeek: {
                        titleFormat: { year: 'numeric', month: 'long'}
                    }
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

        </div>   
    )
}

export default Calendar