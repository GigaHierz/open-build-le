import Header from "/components/core/Header";

export default function Layout(props) {
  return (
    <div className="min-h-screen p-8 xl:px-24 bg-grey ">
      <Header />
      <main className="relative scroll-smooth py-4">{props.children}</main>
    </div>
  );
}
