import Calendar from "./components/Calendar";

function App() {

    const eventList = [
        {
            title: "Event 1",
            start: "2025-02-24T10:00:00",
            end: "2025-02-24T12:00:00",
        },
        {
            title: "Event 1",
            start: "2025-02-24T14:00:00",
            end: "2025-02-24T15:00:00",
        },
        {
            title: "Event 1",
            start: "2025-02-24T15:00:00",
            end: "2025-02-24T16:00:00",
        },
        {
            title: "Event 1",
            start: "2025-02-24T11:00:00",
            end: "2025-02-24T13:00:00",
        },
        
    ]

    return(

        <div className=" w-[]">

            <div>

                <h1>Calendário</h1>
                
                <div>
                    
                    <Calendar events={eventList}/>
                    
                
                </div>
                
            </div>

        </div>
    )

}

export default App;
