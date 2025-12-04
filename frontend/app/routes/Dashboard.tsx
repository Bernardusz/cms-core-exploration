import GridContainer from "~/components/GridContainer";
import type { Route } from "../+types/root";
import { useState } from "react";
import type { Data } from "~/components/BarChart";
import BarChartComponent from "~/components/BarChart";



export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Dashboard - CMS" },
    { name: "description", content: "A Content Management System that's made with React Router v7 and Django from scratch" },
  ];
}

const Dashboard = () => {
    const [data, setData] = useState<Data[]>([
      {name: "January", views: 2240, likes: 430, followers: 100},
      {name: "Febuary", views: 2056, likes: 340, followers: 79},
      {name: "March", views: 2135, likes: 398, followers: 87},
    ])
    return (
        <div className="page">
            <section className="section">
                <BarChartComponent data={data}/>
              <GridContainer>
                <BarChartComponent data={data}/>
                <BarChartComponent data={data}/>
                <BarChartComponent data={data}/>
              </GridContainer>
            </section>
        </div>
    );
};

export default Dashboard;