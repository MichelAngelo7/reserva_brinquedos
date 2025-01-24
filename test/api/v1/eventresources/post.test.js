import database from "infra/database";

beforeAll(cleanDatabase);
async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("POST to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
});

test("Post                                   to /api/v1/event should return Event Created", async () => {
  const response = await fetch("http://localhost:3000/api/v1/eventresources", {
    method: "POST",
    body: JSON.stringify({
      event_id: "1",
      resource_id: "1",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((responseBody) => expect(responseBody).toEqual("true"));
});
``;
