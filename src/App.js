import Layout from "./components/layout/layout";
import Profile from "./components/profile/profile";
import Repositories from "./repositories/repositories";

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
