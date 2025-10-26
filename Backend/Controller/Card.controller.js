import Card from "../model/Cards.js";

// GET all cards
export const getCard = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};

// POST new card
export const createCard = async (req, res) => {
  const { title, author, content, previewImage, fullImage } = req.body;

  if (!title || !author || !previewImage)
    return res.status(400).json({ message: "Missing required fields" });

  try {
    const newCard = new Card({ title, author, content, previewImage, fullImage: fullImage || previewImage });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
