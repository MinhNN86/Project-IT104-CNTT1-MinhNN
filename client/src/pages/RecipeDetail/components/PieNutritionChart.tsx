// PieNutritionChart.tsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Legend } from "recharts";

const COLORS = ["#d94a61", "#e6a476", "#18b89f"]; // Fat, Carb, Protein

const RADIAN = Math.PI / 180;
const renderLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const r = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontSize: 14, fontWeight: 600 }}
    >
      {(percent * 100).toFixed(1)}%
    </text>
  );
};

type Item = { name: string; value: number };

export default function PieNutritionChart({ data }: { data: Item[] }) {
  return (
    <div style={{ width: 360, height: 360 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            labelLine={false}
            label={renderLabel}
            isAnimationActive
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(val: number) => `${val}%`}
            contentStyle={{ borderRadius: 8 }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="square"
            content={() => (
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 24,
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      background: COLORS[0],
                      display: "inline-block",
                    }}
                  />
                  Fat
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      background: COLORS[1],
                      display: "inline-block",
                    }}
                  />
                  Carbohydrate
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      background: COLORS[2],
                      display: "inline-block",
                    }}
                  />
                  Protein
                </li>
              </ul>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
