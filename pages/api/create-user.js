import { MongoClient, ServerApiVersion } from 'mongodb';

export default async function handler(req, res) {
    if(req.method === 'POST') {
        const { name, email, password } = req.body

        let data = {
            name: name,
            email: email,
            password: password
        }

        let client = new MongoClient('mongodb+srv://k7premium0000:Lfyx39pVQ6oHJUCF@cluster0.gowyqjo.mongodb.net/?retryWrites=true&w=majority', {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
        await client.connect();
        let db = client.db('Cluster0');

        await db.collection('user').insertOne(data);

        delete data.password;

        res.status(200).json(data)
    }
}
// Lfyx39pVQ6oHJUCF