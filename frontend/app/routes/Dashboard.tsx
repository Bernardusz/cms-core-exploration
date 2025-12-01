import type { Route } from "../+types/root";
export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Dashboard - CMS" },
    { name: "description", content: "A Content Management System that's made with React Router v7 and Django from scratch" },
  ];
}

const Dashboard = () => {
  // const [userSearch, setUserSearch]
    return (
        <div className="page page--row">
            <section className="section">
            </section>
        </div>
    );
};

export default Dashboard;