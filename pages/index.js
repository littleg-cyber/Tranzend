import Image from 'next/image';

function Home() {
  const user = { displayName: 'Lucas' };
  return (
    <div className="text-center d-flex flex-column justify-content-between align-items-end position-relative page-container">
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
      </div>
    </div>
  );
}

export default Home;
