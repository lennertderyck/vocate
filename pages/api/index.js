// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { composeMail } from "../../utils"
import { sendMail } from "../../utils/nodemailer"

const handler = async ({ query }, res) => {  
  if (query.key !== 'testing') res.status(401).json({ error: 'Key not found' })
  else {
    const stat = await sendMail({
      from: 'vocate@lennertderyck.be',
      to: query.email,
      subject: `Er is een nieuwe versie van ${ query.url } klaar`,
      html: composeMail({ name: query.name, url: query.url })
    })
    console.log(await stat)
    await res.status(200).json({ status: 'Mail sended!' })
  }
}

export default handler