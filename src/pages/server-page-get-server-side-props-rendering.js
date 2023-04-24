import React from 'react';
import * as ReactDOMServer from "react-dom/server";

function HtmlPage({ children }) {
    return (
        <html>
        <head>
            <title>Example HTML Page Server - getServerSideProps Rendering</title>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}

export default function ServerPageNormalRendering(test) {
    return (
        <div>
            <h1>Server Page</h1>
            <pre>{JSON.stringify(test.data, null, 2)}</pre>
        </div>
    );
}

export async function getServerSideProps(context) {
    context.res.setHeader(
        'Cache-Control',
        `no-transform, s-maxage=${60 * 5}, stale-while-revalidate=60`,
    )

    const data = {message: 'Hello!', generatedAt: new Date().toISOString(),};
    const simulatedFetchResult = ReactDOMServer.renderToString(<HtmlPage><ServerPageNormalRendering data={data} /></HtmlPage>)

    context.res.write(simulatedFetchResult)
    context.res.end()
    return {
        props: {data},
    };
}
