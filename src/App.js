import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import Repositories from "./components/repositories/Repositories";

function App() {
  return (
    <div>
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </div>
  );
}

export default App;
