function Home() {
  const user = { displayName: 'Jane Doe' };
  return (
    <div
      className="blue-card text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '450px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
    </div>
  );
}

export default Home;
