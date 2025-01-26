import database from "infra/database";
async function resource(request, response) {
  const mehtod = request.method;

  if (mehtod === "POST") {
    try {
      addResource(request.body);
    } catch (err) {
      throw response.status(402).json({ err });
    }

    response.status(200).json("true");
  }

  if (mehtod === "GET") {
    try {
      getAllResourse(request, response);
    } catch (err) {
      throw response.status(402).json({ err });
    }
  }
}

async function getAllResourse(request, response) {
  try {
    const result = await database.query({
      text: "SELECT * FROM resource",
    });

    response.status(200).json(result);
  } catch (err) {
    throw err;
  }
}

async function addResource(requestBody, response) {
  const event = requestBody;
  console.log(event.name);

  try {
    const result = await database.query({
      text: "INSERT INTO resource(name) VALUES ($1)",
      values: [event.name],
    });
  } catch (err) {
    throw err;
  }
}

export default resource;
