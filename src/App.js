import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import Repositories from "./components/repositories/Repositories";
import GitHubProvider from "./hooks/githubProvider";

function App() {
  return (
      <GitHubProvider>
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GitHubProvider>
  );
}

export default App;
