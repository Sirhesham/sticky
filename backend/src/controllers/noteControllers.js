export const getAllNotes = (req, res) => {
  try {
    res.status(200).send("you need get the notes api route");
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const createNote = (req, res) => {
  try {
    res.status(201).send("create note api route");
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
export const updateNote = (req, res) => {
  try {
    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
export const deleteNote = (req, res) => {
  try {
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
