import { useEffect, useState } from "react";
import Header from "../components/header";

export default function status() {
  const [response, setResponse] = useState("legal");
  const [database, setDatabase] = useState("legal");

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await response.json();
      setResponse(responseBody);
      console.log(responseBody.dependencies.database);
      setDatabase(responseBody.dependencies.database);
    }
    getData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Status Page</h1>
      <spam>Atualizado em: {new Date(response.updated_at).toDateString()}</spam>
      <div>
        <spam>Versão: {database.version}</spam>
      </div>
      <div>
        <spam>Conexões Máximas: {database.max_connections}</spam>
      </div>
      <div>
        <spam>Conexões abertas: {database.opened_connections}</spam>
      </div>
    </div>
  );
}
