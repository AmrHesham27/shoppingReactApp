import Layout from "../../components/layout/Layout/Layout";
import Message from "../../components/UI/Message/Message";

function Dashboard() {
  return (
    <Layout>
      <div className="my-5 p-5 d-flex flex-column align-items-center mx-auto">
        <div>Dashboard</div>
        <div>This page is under developement</div>
      </div>
      <Message />
    </Layout>
  );
}

export default Dashboard;
