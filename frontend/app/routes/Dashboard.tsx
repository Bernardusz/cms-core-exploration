import InputSection from "~/components/Input";
import type { Route } from "../+types/root";
import SettingsLogo from "~/assets/Settings.svg?react"
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
              <input type="text" />
            </section>
        </div>
    );
};

export default Dashboard;