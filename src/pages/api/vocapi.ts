import fs from 'fs'
import path from 'path'

export default function handler(req: { method: string }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data: number }): void; new(): any } } }) {
    if (req.method === "GET") {
        const filePath = path.join(process.cwd(), "src/data", "listes.json")
        const fileData = fs.readFileSync(filePath)
        const data = JSON.parse(fileData.toString()) // Convertir le Buffer en chaîne de caractères
        res.status(200).json(data)
    }
}
