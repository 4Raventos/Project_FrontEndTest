import { NextApiRequest, NextApiResponse } from 'next';

interface IEventDTO {
    Event_Name: string,                 // Nombre del evento que aparecera en los calendarios y reservas
    Event_Title: string | null,         // Titulo que nos aportara informacion adicional
    Event_Description: string | null,   // Descripcion del Evento en detalle
    Quantity: number                    // Cantidad de personas que pueden participar en el evento
}

const isValidIEvent = (event: IEventDTO) => {
    if(typeof event !== "object") return false;
    if(typeof event.Event_Name !== "string") return false;
    if(event.Event_Title !== null && typeof event.Event_Title !== "string") return false;
    if(event.Event_Description !== null && typeof event.Event_Description !== "string") return false;
    if(typeof event.Quantity !== "number") return false;

    return true;
}

const events: IEventDTO[] = [
    { Event_Name: "event1", Event_Title: "Winter Wonderland Celebration", Event_Description: "Join us for a magical winter wonderland celebration filled with festive decorations, live music, and delicious treats. Don't miss out on this enchanting Christmas event!", Quantity: 50 },
    { Event_Name: "event2", Event_Title: "Ugly Sweater Contest", Event_Description: "Get ready to show off your most outrageous, funny, and creative ugly sweaters! Participate in our annual ugly sweater contest and stand a chance to win exciting prizes. The more unique, the better!", Quantity: 100 },
    { Event_Name: "event3", Event_Title: null, Event_Description: "Step into Santa's Workshop and experience the joy of giving. Help us wrap gifts for children in need and spread the holiday cheer. Your efforts will make a difference in someone's life!", Quantity: 200 },
    { Event_Name: "event4", Event_Title: "Cocoa and Carols", Event_Description: "Indulge in a cozy evening of hot cocoa and caroling. Join us around the fireplace as we sing classic Christmas carols and enjoy delicious hot chocolate with marshmallows. It's the perfect way to get into the holiday spirit!", Quantity: 75 },
    { Event_Name: "event5", Event_Title: "Gingerbread House Decorating", Event_Description: "Unleash your creativity and build the most spectacular gingerbread house! Join us for a fun-filled afternoon of decorating gingerbread houses with icing, candies, and sprinkles. Let your imagination run wild!", Quantity: 120 },
    { Event_Name: "event6", Event_Title: "Holiday Movie Marathon", Event_Description: null, Quantity: 1 },
    { Event_Name: "event7", Event_Title: "Christmas Trivia Extravaganza", Event_Description: "Test your knowledge of all things Christmas with our trivia extravaganza. Join us for an evening of friendly competition, brain-teasing questions, and festive prizes. It's time to put your holiday knowledge to the test!", Quantity: 150 },
    { Event_Name: "event8", Event_Title: "Holiday Baking Challenge", Event_Description: "Calling all bakers! Showcase your baking skills and creativity in our holiday baking challenge. Bring your best homemade holiday treats and let our judges decide the winner. May the best baker win!", Quantity: 90 },
    { Event_Name: "event9", Event_Title: "Christmas Craft Fair", Event_Description: "Discover unique handmade gifts, ornaments, and crafts at our Christmas craft fair. Support local artisans, find one-of-a-kind treasures, and get into the holiday shopping spirit. It's the perfect opportunity to find special gifts for your loved ones!", Quantity: 60 },
    { Event_Name: "event10", Event_Title: "Jingle Bell Jog", Event_Description: "Put on your running shoes and join us for a festive 5K Jingle Bell Jog. Run, walk, or jog your way through a merry course filled with holiday decorations and cheer. It's a fun way to stay active and celebrate the season!", Quantity: 110 },
];

export const addEventToList = (event:IEventDTO):boolean => {
    if(!isValidIEvent(event)) return false;
    
    events.push(event);
    return true;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json({ events: events });
    }
    else {
        res.status(404).json({ error: "What are you trying to do eh?" });
    }
}