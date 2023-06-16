import { createContext, useState } from "react"

export const EventsContext = createContext()

const EventsProvider = ({children}) => {
    const [events, setEvents] = useState([])

    return (
        <EventsContext.Provider value={{events, setEvents}}>
            {children}
        </EventsContext.Provider>
    )
}

export default EventsProvider