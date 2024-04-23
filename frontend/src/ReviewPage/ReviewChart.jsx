import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
} from "recharts";

import { getRatingsByStars } from "../services/apiReviews";

function ReviewChart() {
  const { productId } = useParams();
  const { data: apiData, isLoading } = useQuery({
    queryKey: ["reviewsByStar"],
    queryFn: () => getRatingsByStars(productId),
  });

  if (isLoading) return;

  const totalRatings = apiData.reduce((total, num) => total + num.count, 0);

  const data = apiData.map((obj) => {
    return {
      name: `${obj._id} Star`,
      value: obj.count,
      content: `${Math.round((obj.count * 100) / totalRatings)}%`,
    };
  });

  return (
    <ResponsiveContainer height={200} width="70%">
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        layout="vertical"
      >
        <XAxis type="number" hide={true} />
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />
        <Bar dataKey="value" fill="#8884d8">
          <LabelList dataKey="content" position="right" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ReviewChart;
