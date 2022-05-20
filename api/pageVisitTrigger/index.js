module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const body =  req.body;

    if (body && body.page) {
        context.bindings.outputDocument = JSON.stringify({
            // create a random ID
            id: new Date().toISOString() + Math.random().toString().substr(2,8),
            ...body
        });

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Successfully added data to database"
        };
    }
    else {
        context.res = {
            body: "Invalid function call"
        }
    }
}