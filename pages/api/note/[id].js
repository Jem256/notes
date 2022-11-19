import nc from 'next-connect';
import notes from '../../../src/data/data';

const getNote = (id) => notes.find((n) => n.id === parseInt(id));

const handler = nc()
  .get((req, res) => {
    // get one note
    const note = getNote(req.query.id);
    if (!note) {
      res.statusCode(404);
      res.end();
      return;
    }

    res.json({ data: note });
  })
  .patch((req, res) => {
    // update a note
    const note = getNote(req.query.id);
    if (!note) {
      res.statusCode(404);
      res.end();
      return;
    }

    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));
    const updated = { ...note, ...req.body };
    notes[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    //delete note
    const note = getNote(req.query.id);
    if (!note) {
      res.statusCode(404);
      res.end();
      return;
    }

    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));
    notes.splice(i, 1);
    res.json({ data: req.query.id });
  });

export default handler;
