import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "src/data", "listes.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData); // Vous n'avez pas besoin de convertir en chaîne de caractères
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const { en, fr } = req.body; // Assurez-vous que req.body est correctement typé
    const newWord = {
      en: en,
      fr: fr,
    };

    const filePath = path.join(process.cwd(), 'src/data', 'listes.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData); // Vous n'avez pas besoin de convertir en chaîne de caractères
    data.englishList[0].data.push(newWord);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Formatez le JSON avec des espaces pour une meilleure lisibilité
    res.status(201).json({ message: "Succès" });
  }
}
