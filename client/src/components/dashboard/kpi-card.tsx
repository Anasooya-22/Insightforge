import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  data: { value: number }[];
}

export function KPICard({ title, value, change, trend, data }: KPICardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground font-sans">
          {title}
        </CardTitle>
        {trend === "up" ? (
          <div className="flex items-center text-emerald-600 bg-emerald-50 rounded-full px-2 py-0.5 text-xs font-medium">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            {change}
          </div>
        ) : (
          <div className="flex items-center text-rose-600 bg-rose-50 rounded-full px-2 py-0.5 text-xs font-medium">
            <ArrowDownRight className="h-3 w-3 mr-1" />
            {change}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-display tracking-tight text-foreground mb-4">{value}</div>
        <div className="h-[40px] w-full opacity-50">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={trend === "up" ? "#10b981" : "#e11d48"}
                strokeWidth={2}
                dot={false}
              />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded bg-primary text-primary-foreground px-2 py-1 text-xs">
                        {payload[0].value}
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
