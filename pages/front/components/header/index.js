import { Nav } from "./styled";

export default function Header() {
  return (
    <Nav>
      <a href="/">Home</a>
      <a href="/front/events">Exibir Eventos</a>
      <a href="/front/event">Cad. Evento</a>
      <a href="/front/resources">Exibir Recursos</a>
      <a href="/front/resource">Cad. Recursos</a>
      <a href="/front/status">Status</a>
    </Nav>
  );
}
