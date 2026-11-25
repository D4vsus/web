interface Props {
  name: string;
}

export default function Footer({ name }: Props) {
  return <footer className="foot">© {new Date().getFullYear()} {name}</footer>;
}
