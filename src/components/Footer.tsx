interface Props {
  name: string;
}

export default function Footer({ name }: Props) {
  return <footer className="foot">© 2026 {name}</footer>;
}
