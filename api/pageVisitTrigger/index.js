module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    const responseMessage = JSON.stringify({
        name: "Carlos",
        description: "This is something"
    });

    //const responseMessage = JSON.stringify(context.bindings.outputDocument, null, 4);

        // if (name) {
        //     context.bindings.outputDocument = JSON.stringify({
        //         // create a random ID
        //         id: new Date().toISOString() + Math.random().toString().substr(2,8),
        //         page: name
        //     });
        // }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}