// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = ({ query }, res) => {  
  if (query.key !== 'testing') res.status(401).json({ error: 'Key not found' })
  else res.status(200).json({ name: 'John Doe' })
  
  console.log(`
    <h3>Dag ${ query.name }, Er wacht een update</h3>
    <p>
      Er staat een update van je project te wachten!<br>
      Bekijk het via <a href="${ query.url }" target="_blank" rel="noopener">${ query.url }</a>
    </p>
    
    <p>
      Vriendelijke groet,<br>
      Lennert De Ryck
    </p>
    
    <small>Dit is een automatisch bericht. Bij vragen of opmerkingen mail naar <a href="mailto:hello@lennertderyck.be?subject=Automatische email deployments">hello@lennertderyck.be</a></small>
  `)
}

export default handler