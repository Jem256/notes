import nc from 'next-connect';
import notes from '../../../src/data/data';

const handler = nc()
  .get((req, res) => {
    // get all notes
    res.json({ data: notes });
  })
  .post((req, res) => {
    // create a note
    const id = Date.now();
    const note = { ...req.body, id };
    notes.push(note);
    res.json({ data: note });
  });

export default handler;
