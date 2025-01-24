import database from "infra/database";
async function event(request, response) {
  const method = request.method;

  if (method === "POST") {
    try {
      cadastrasEvento(request.body);
    } catch (err) {
      throw response.status(402).json({ err });
    }

    response.status(200).json("true");
  }

  if (method === "GET") {
    try {
      getAllEvent(request, response);
    } catch (err) {
      throw response.status(402).json({ err });
    }
  }
}

async function getAllEvent(request, response) {
  try {
    const result = await database.query({
      text: "SELECT * FROM event",
    });
    response.status(200).json(result);
  } catch (err) {
    throw err;
  }
}

async function cadastrasEvento(requestBody, response) {
  const event = requestBody;

  try {
    const result = await database.query({
      text: "INSERT INTO event(date, title, timeinit, timeend, eventtype, status, sketch, permitbh, protocolpm, information) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
      values: [
        event.date,
        event.title,
        event.timeinit,
        event.timeend,
        event.eventtype,
        event.status,
        event.sketch,
        event.permitbh,
        event.protocolpm,
        event.information,
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default event;
