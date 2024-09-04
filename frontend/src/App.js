import { LoginSocialFacebook ,LoginSocialGithub } from "reactjs-social-login";
import { FacebookLoginButton,GithubLoginButton } from "react-social-login-buttons";

import { useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState(null);

  const handleFacebookLogin = (response) => {
    console.log("Facebook Response:", response);
    if (response?.data) {
      setProfile(response.data);
    } else {
      console.log("Data field is missing in the response.");
    }
  };

  const handleGithubLogin = (response) => {
    console.log("GitHub Response:", response);
    if (response?.data) {
      setProfile(response.data);
    } else {
      console.log("Data field is missing in the response.");
    }
  };

  return (
    <div>
      {!profile ? (
        <>
          <LoginSocialFacebook
            appId="2028440787670372"
            onResolve={handleFacebookLogin}
            onReject={(error) => {
              console.log("Facebook Login failed:", error);
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>

          <LoginSocialGithub
            clientId="Ov23litb7NAM1UhkDYZ0"
            redirectUri="http://localhost:3000/github/callback"
            onResolve={handleGithubLogin}
            onReject={(error) => {
              console.log("GitHub Login failed:", error);
            }}
          >
            <GithubLoginButton />
          </LoginSocialGithub>
        </>
      ) : (
        <div>
          <h1>{profile.name}</h1>
          <img src={profile?.avatar_url || profile?.picture?.data?.url} alt="Profile" />
        </div>
      )}
    </div>
  );
}

export default App;
