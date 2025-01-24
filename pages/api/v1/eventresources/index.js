import database from "infra/database";
async function eventresources(request, response) {
  const mehtod = request.method;

  if (mehtod === "POST") {
    try {
      addEventResourses(request.body);
    } catch (err) {
      throw response.status(402).json({ err });
    }

    response.status(200).json("true");
  }
}

async function addEventResourses(requestBody, response) {
  const event = requestBody;

  try {
    const result = await database.query({
      text: "INSERT INTO event_resources(event_id, resource_id) VALUES ($1, $2)",
      values: [event.date, event.title],
    });
  } catch (err) {
    throw err;
  }
}

export default eventresources;
