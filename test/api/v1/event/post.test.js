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
  const response = await fetch("http://localhost:3000/api/v1/event", {
    method: "POST",
    body: JSON.stringify({
      title: "Rua de Lazer Instituto Moatem",
      date: "2025-01-01",
      timeinit: "12:00:00",
      timeend: "15:00:00",
      // resources: [
      //   "Cama elástica",
      //   "Pisina de bolinha",
      //   "tobogã",
      //   "Máquina algodão doce",
      //   "pipoqueira életrica",
      // ],
      eventtype: "Evento de rua",
      status: "Em andamento",
      sketch: false,
      permitbh: "Não precisa",
      protocolpm: "Não iniciado",
      information:
        "Responsável pelo evento: Silvana Faria Barbosa Tel:(31) 99974-6156 Endereço do evento: Rua Barão De Guaxupé, n° 510 Casa Bairro: Alto dos Pinheiros Número de pessoas: 50 Horário do evento: de 10:00hs às 16:hs Horário de montagem 12:00hs Horário de desmontagem 15:00hs O evento será feito na porta do Instituto Moatêm (Ponto de Cultura pelo Ministério da Cultura)como fim de férias escolares comemoração e incentivo para as crianças voltarem as aulas mais animados e felizes. E dando início às atividades do Instituto Moatêm para 2025.",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((responseBody) => expect(responseBody).toEqual("true"));
});
``;
