/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from "recharts";

import colors from 'tailwindcss/colors'

export function RevenueChart() {
  const data = [
    { date: "10/12", revenue: 1200 },
    { date: "11/12", revenue: 1300 },
    { date: "12/12", revenue: 200 },
    { date: "13/12", revenue: 2344 },
    { date: "14/12", revenue: 1621 },
    { date: "15/12", revenue: 340 },
    { date: "16/12", revenue: 800 },
  ];

  return (
    <>
      <Card className="col-span-6">
        <CardHeader className="flex-row items-center justify-between pb-8 ">
          <div className="space-y-1">
            <CardTitle className="text-base font-medium">
              Receita no periodo
            </CardTitle>
            <CardDescription>Receita diária no período</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={data} style={{ fontSize: 12 }}>
              <YAxis stroke="#888" axisLine={false} tickLine={false} width={80} tickFormatter={(value: number) => value.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}/>

              <CartesianGrid vertical = {false} className="stroke-muted"/>

              <XAxis dataKey="date" axisLine={false} tickLine={false} width={80} dy={16}/>
              <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.violet['400']}></Line>
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
}
