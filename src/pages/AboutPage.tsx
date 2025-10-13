import { useState } from "react";
import { Button } from "@bosch/react-frok";
const AboutPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Bosch Web App</h1>
      <p>This application is built using components from @bosch/react-frok.</p>

      {/* 2. Use the component in your JSX */}
      <Button mode="primary" onClick={() => setCount((count) => count + 1)}>
        You clicked me {count} times
      </Button>

      <br />
      <br />

      <Button mode="secondary" onClick={() => setCount(0)}>
        Reset Counter
      </Button>
    </div>
  );
};

export default AboutPage;
