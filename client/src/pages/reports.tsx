import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Download, FileJson, FileBarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const reports = [
  { name: "Q3 Market Sentiment.pdf", date: "Oct 12, 2025", size: "2.4 MB", type: "PDF" },
  { name: "Demographic Correlation.xlsx", date: "Oct 10, 2025", size: "1.1 MB", type: "XLSX" },
  { name: "Respondent Data Feed.json", date: "Oct 08, 2025", size: "840 KB", type: "JSON" },
  { name: "Executive Summary - V2.pdf", date: "Oct 05, 2025", size: "4.2 MB", type: "PDF" },
];

export default function Reports() {
  return (
    <div className="flex min-h-screen bg-background font-sans subtle-grain">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">Download Reports</h1>
              <p className="text-muted-foreground mt-1 text-sm">Historical research data and AI insights exports.</p>
            </div>
            <Button className="gap-2"><Plus className="h-4 w-4" /> Generate New Report</Button>
          </div>

          <div className="grid gap-4">
            {reports.map((report) => (
              <Card key={report.name} className="border-none shadow-sm hover:shadow-md transition-all cursor-pointer group">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {report.type === 'PDF' ? <FileText className="h-5 w-5" /> : report.type === 'JSON' ? <FileJson className="h-5 w-5" /> : <FileBarChart className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{report.name}</h3>
                      <p className="text-xs text-muted-foreground">{report.date} • {report.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                    <Download className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
