import Image from 'next/image';

function Home() {
  const user = { displayName: 'Lucas' };
  return (
    <div className="text-center d-flex flex-column justify-content-between align-items-end position-relative home-page-container">
      <div className="content-container">
        <div className="card-container">
          <div className="welcome-message">
            <h1>
              Welcome back,
              <br />
              {user.displayName}
            </h1>
          </div>
          <div className="profile-image">
            <Image
              src="/profile.jpg" // Replace with your image URL
              alt="Profile"
              width={42}
              height={42}
              layout="fixed"
            />
          </div>
        </div>
        <div className="balance-text">
          Available balance <br />$103
        </div>
        <div className="additional-text">
          What would you like to do?
        </div>
        <div className="button-container">
          <div className="button">
            <span className="icon">Icon 1</span>
            <span className="text">Add Money</span>
          </div>
          <div className="button">
            <span className="icon">Icon 2</span>
            <span className="text">Transfer</span>
          </div>
          <div className="button">
            <span className="icon">Icon 3</span>
            <span className="text">Send/Request</span>
          </div>
          <div className="button">
            <span className="icon">Icon 4</span>
            <span className="text">Help</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
