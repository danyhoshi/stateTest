import Heading from "./Heading";
import Section from "./Section";

export default function ProfilePage() {
  return (
    <Section>
      <Heading>Mi perfil</Heading>
      <Post title="¡Hola viajero!" body="Lee sobre mis aventuras." />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Publicaciones</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Publicaciones recientes</Heading>
      <Post title="Sabores de Lisboa" body="¡...esos pastéis de nata!" />
      <Post title="Buenos Aires a ritmo de tango" body="¡Me encantó!" />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}
