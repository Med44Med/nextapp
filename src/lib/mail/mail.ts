import Mailjet from 'node-mailjet'


type mailFunc = {
    email:string;
    username:string;
    activeCode:number;
}

export async function CheckEmails({email,username,activeCode}:mailFunc) {
    const mailjet = new Mailjet({
        apiKey: process.env.MAILJET_API_KEY,
        apiSecret: process.env.MAILJET_SECRET_KEY
    })
    
try {
    
    const emailSend = await mailjet
                        .post('send', { version: 'v3.1' })
                        .request({
                            Messages: [
                                {
                                    From: {
                                        Email: "mstgci4@gmail.com",
                                        Name: "Dorossi support"
                                        },
                                    To: [
                                            {
                                                Email: email,
                                                Name: username
                                            }
                                        ],
                                    Subject: "Activation account",
                                    TextPart: `Hello ${username},\n\nYour activation code is: ${activeCode}`,
                                    HTMLPart: `<h1>ciao</h1>`
                                }
                            ]
                        })
    
                        console.log("success:", emailSend.body);
                        return { status: 'ok' };
                
                    } catch (err) {
                        console.log("error:", err);
                        return { status: 'nonok' };
                    }
                }