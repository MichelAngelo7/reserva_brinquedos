import { Container } from "../styles/GlobalStyles";
import { Title, Form } from "../home/styled";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { Table } from "./styled";

export default function resource() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    async function getAllResourse() {
      const response = await fetch("http://localhost:3000/api/v1/resource");
      const responsebody = await response.json();
      setResources(responsebody.rows);
    }
    getAllResourse();
  }, []);

  return (
    <Container>
      <Header />
      <Title>Recursos</Title>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource, index) => (
            <tr key={String(resource.id)}>
              <td>{resource.id}</td>
              <td>{resource.name}</td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </Table>
    </Container>
  );
}
