import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Contador</h1>
      <button className="btn btn-blue" onClick={() => setCount((c) => c + 1)}>
        Click me
      </button>
      <p>
        Has hecho <b>{count}</b> clicks
      </p>
    </div>
  );
}

export default Home;
