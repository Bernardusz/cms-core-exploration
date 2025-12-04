import { CartesianGrid, Legend, Bar, BarChart, XAxis, YAxis, Tooltip } from 'recharts'

export type Data = {
    name: string,
    views: number,
    likes: number,
    followers: number
}

type BarChartProps = {
    data: Data[];
}

const BarChartComponent = ({ data }: BarChartProps) => {
  return (
    <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis width="auto"/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="views" fill='#ADE1EF' isAnimationActive={true}/>
        <Bar dataKey="likes" fill='#DFCFF3' isAnimationActive={true}/>
        <Bar dataKey="followers" fill='#B2EAD3' isAnimationActive={true}/>
    </BarChart>

  );
}

export default BarChartComponent;