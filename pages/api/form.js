import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    if(req.method!=="POST"){
        return req.status(405).json({ status:"Method Not Found" });
    }

    try{
        const firstName = req.body.first_name;
        const lastName = req.body.last_name;
        const ph_no = req.body.ph_no;
        const email = req.body.email;
        // console.log(firstName,lastName,ph_no,email)
        // console.log(typeof firstName,typeof lastName,typeof ph_no,typeof email)
        const saveContact = await prisma.Contact.create({ data: {
            firstName: firstName,
            lastName: lastName,
            ph_no : Number(ph_no),
            email : email
          }
        });
        res.status(200).json({status:"Data Inserted Successfully", success:true});
    }
    catch{
        res.status(400).json({status : "Internal server error"})
    }
}

// export default function handler(req, res) {
//     console.log(req.body);
//     res.status(200).json({ success:true, successMessage: "Data uploaded successfully" , errorMessage: "Inetrnal server error"})
//   }
  