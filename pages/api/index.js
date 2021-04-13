// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = ({ query}, res) => {  
  if (query.key !== 'testing') res.status(401).json({ error: 'Key not found' })
  else res.status(200).json({ name: 'John Doe' })
  
  console.log(`
    Er staat een update van je project te wachten!
    Bekijk het via 
  `)
}

export default handler