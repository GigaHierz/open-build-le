export default function RootLayout(props) {
  return (
    <main className="relative min-h-screen bg-grey scroll-smooth">
      {props.children}
    </main>
  );
}
