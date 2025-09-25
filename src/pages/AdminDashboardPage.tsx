import Layout from '../components/Layout';
import AdminDashboard from '../components/admin/AdminDashboard';

const AdminDashboardPage = () => {
  return (
    <Layout userRole="admin">
      <AdminDashboard />
    </Layout>
  );
};

export default AdminDashboardPage;