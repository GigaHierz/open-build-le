import { ConnectKitButton } from "connectkit";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ConnectKitButton />
    </div>
  );
}

// import Apply from "/components/main/Apply";

// export default function ApplyPage(context) {
//   return <Apply />;
// }
