export const composeMail = ({ name, url }) => `
    <h3>Dag ${ name },</h3>
    <p>
        Er staat een update van je project te wachten!<br>
        Bekijk het via <a href="${ url }" target="_blank" rel="noopener">${ url }</a>
    </p>

    <p>
        Vriendelijke groet,<br>
        Lennert De Ryck
    </p>

    <small>Dit is een automatisch bericht – bij vragen of opmerkingen mail naar <a href="mailto:hello@lennertderyck.be?subject=Automatische email deployments">hello@lennertderyck.be</a></small>
`