import Layout from '../components/Layout';
import StudentDashboard from '../components/student/StudentDashboard';

const StudentDashboardPage = () => {
  return (
    <Layout userRole="student">
      <StudentDashboard />
    </Layout>
  );
};

export default StudentDashboardPage;