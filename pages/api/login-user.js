import { MongoClient, ServerApiVersion } from 'mongodb';

export default async function handler(req, res) {
    if(req.method === 'POST') {
        const { name, email, password } = req.body

        let data = {
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

        let result = await db.collection('user').findOne({email: data.email})

        if(result){
          if(result.email === data.email && result.password === data.password) {
            res.status(200).json(data)
          } 
        } else {
          res.status(200).json(false)
        }

    }
}
// Lfyx39pVQ6oHJUCF