import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Euro,
  Calendar,
  BookOpen
} from "lucide-react";

interface DashboardProps {
  onNavigate: (section: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const stats = [
    {
      title: "Bandi Attivi",
      value: "12",
      change: "+3 questo mese",
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: "Domande in Corso",
      value: "4",
      change: "2 in scadenza",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      title: "Fondi Ottenuti",
      value: "€ 45.000",
      change: "+€12.000 quest'anno",
      icon: Euro,
      color: "text-blue-600"
    },
    {
      title: "Tasso di Successo",
      value: "78%",
      change: "+15% vs media",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const activeBandi = [
    {
      id: 1,
      title: "PSR 2023-2027 - Investimenti in macchinari",
      scadenza: "15 Marzo 2026",
      importoMax: "€ 50.000",
      compatibilita: 92,
      status: "Compatibile"
    },
    {
      id: 2,
      title: "Sostegno giovani agricoltori",
      scadenza: "28 Febbraio 2026",
      importoMax: "€ 70.000",
      compatibilita: 85,
      status: "Compatibile"
    },
    {
      id: 3,
      title: "Agricoltura biologica - Conversione",
      scadenza: "10 Aprile 2026",
      importoMax: "€ 25.000",
      compatibilita: 67,
      status: "Da verificare"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "success",
      text: "Domanda PSR Irrigazione approvata",
      time: "2 giorni fa"
    },
    {
      id: 2,
      type: "warning",
      text: "Registro fitosanitari da aggiornare",
      time: "3 giorni fa"
    },
    {
      id: 3,
      type: "info",
      text: "Nuovo bando disponibile: Energie rinnovabili",
      time: "5 giorni fa"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Benvenuto, Azienda Agricola Rossi</h1>
        <p className="text-gray-600 mt-1">Panoramica della tua attività e opportunità disponibili</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bandi Compatibili */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Bandi Compatibili con la Tua Azienda</CardTitle>
                <CardDescription>Opportunità di finanziamento analizzate automaticamente</CardDescription>
              </div>
              <Button onClick={() => onNavigate('bandi')} variant="outline" size="sm">
                Vedi tutti
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeBandi.map((bando) => (
              <div key={bando.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{bando.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Scadenza: {bando.scadenza}
                      </div>
                      <div className="flex items-center gap-1">
                        <Euro className="h-4 w-4" />
                        Max {bando.importoMax}
                      </div>
                    </div>
                  </div>
                  <Badge variant={bando.compatibilita > 80 ? "default" : "secondary"}>
                    {bando.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Compatibilità azienda</span>
                    <span className="font-semibold">{bando.compatibilita}%</span>
                  </div>
                  <Progress value={bando.compatibilita} className="h-2" />
                </div>
                <div className="flex gap-2 mt-3">
                  <Button 
                    onClick={() => onNavigate('compila-bando')} 
                    size="sm" 
                    className="flex-1"
                  >
                    Compila Domanda
                  </Button>
                  <Button variant="outline" size="sm">
                    Dettagli
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle>Attività Recenti</CardTitle>
            <CardDescription>Aggiornamenti e notifiche</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                {activity.type === 'success' && (
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                )}
                {activity.type === 'warning' && (
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                )}
                {activity.type === 'info' && (
                  <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
                )}
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Azioni Rapide</CardTitle>
          <CardDescription>Accedi rapidamente alle funzioni principali</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-auto flex-col gap-2 p-4"
              onClick={() => onNavigate('compila-bando')}
            >
              <FileText className="h-6 w-6" />
              <span className="text-sm">Nuova Domanda</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto flex-col gap-2 p-4"
              onClick={() => onNavigate('registri')}
            >
              <BookOpen className="h-6 w-6" />
              <span className="text-sm">Registri</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto flex-col gap-2 p-4"
              onClick={() => onNavigate('certificazioni')}
            >
              <CheckCircle className="h-6 w-6" />
              <span className="text-sm">Certificazioni</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto flex-col gap-2 p-4"
              onClick={() => onNavigate('bandi')}
            >
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">Esplora Bandi</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
