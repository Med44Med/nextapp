import Mailjet from 'node-mailjet'

const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY,
    apiKey: process.env.MAILJET_SECRET_KEY
})

type mailFunc = {
    email:string;
    username:string;
    activeCode:number;
}

export function CheckEmails({email,username,activeCode}:mailFunc):boolean {

    const email = mailjet
                        .post('send', { version: 'v3.1' })
                        .request({
                            "Messages": [
                                {
                                    From: {
                                        Email: "mstgci4@gmail.com",
                                        Name: "Dorossi"
                                        },
                                    To: [
                                            {
                                                Email: email,
                                                Name: username
                                            }
                                        ],
                                    Subject: "Activation account",
                                    HTMLPart: `<h1>your activation code is : ${activeCode}</h1>`
                                }
                            ]
                        })
    }
    
    email.then((result)=>{
            console.log(result.body);
            return true
        })
        .catch((err)=>{
            log(err.status.code)
            return false
        }) 
