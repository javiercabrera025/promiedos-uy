import React from "react";
import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is a basic home page component.</p>
      </div>
    </div>
  );
};

export default Home;
