import { NextApiRequest, NextApiResponse } from 'next';
import { addEventToList } from '../listAll';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        
        if(typeof req.body !== "object") {
            res.status(400).json({ error: "Missing Body" });
        }


        if(addEventToList(req.body)) {
            res.status(200).json({ result: "Added successfully" });
        }
        else {
            res.status(400).json({ error: "Body Contains Errors" });
        }
    }
    else {
        res.status(401).json({ error: 'Method not authorized' });
    }
    
}