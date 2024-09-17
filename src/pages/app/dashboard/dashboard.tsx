/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import { Helmet } from "react-helmet-async";

import { CardMonthRevenue } from "./dashboard_card-month-revenue";
import { CardOrdersAmountDay } from "./dashboard_orders-day-amount";
import { CardOrdersAmountMonth } from "./dashboard_orders-mounth-amout";
import { CardCanceledOrders } from "./dashboard_month-canceled-orders";
import { RevenueChart } from "./chart_revenue";
import { PopularProducts } from "./chart_popular-products";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <CardMonthRevenue />
          <CardOrdersAmountMonth />
          <CardOrdersAmountDay />
          <CardCanceledOrders />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProducts />
        </div>
      </div>
    </>
  );
}
