import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  Award, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  FileCheck,
  Calendar,
  Download
} from "lucide-react";

export function Certificazioni() {
  const certificazioni = [
    {
      id: 1,
      nome: "Certificazione Biologica",
      ente: "ICEA",
      numero: "IT-BIO-006-AB123",
      scadenza: "2026-12-31",
      stato: "Attiva",
      giorni: 298,
      documenti: ["Certificato", "Piano di controllo", "Relazione ispettiva"]
    },
    {
      id: 2,
      nome: "Condizionalità PAC",
      ente: "AGEA",
      numero: "PAC-2026-RE-00456",
      scadenza: "2026-12-31",
      stato: "Attiva",
      giorni: 298,
      documenti: ["Dichiarazione", "Checklist controlli"]
    },
    {
      id: 3,
      nome: "Patentino Fitosanitari",
      ente: "Regione Emilia-Romagna",
      numero: "FIT-RE-2024-1234",
      scadenza: "2026-03-15",
      stato: "In scadenza",
      giorni: 37,
      documenti: ["Certificato", "Attestato corso aggiornamento"]
    },
    {
      id: 4,
      nome: "HACCP",
      ente: "ASL Reggio Emilia",
      numero: "HACCP-RE-2023-789",
      scadenza: "2026-02-20",
      stato: "Scaduta",
      giorni: -14,
      documenti: ["Manuale autocontrollo", "Certificato"]
    }
  ];

  const praticheInCorso = [
    {
      id: 1,
      nome: "Rinnovo Certificazione Biologica",
      step: "Ispezione programmata",
      progresso: 65,
      prossimaPasso: "Visita ispettiva - 15 Febbraio 2026"
    },
    {
      id: 2,
      nome: "Domanda PSR - Investimenti macchinari",
      step: "In valutazione",
      progresso: 80,
      prossimaPasso: "Attesa risposta commissione"
    }
  ];

  const getStatoBadge = (stato: string) => {
    switch (stato) {
      case "Attiva":
        return <Badge className="bg-green-100 text-green-800">Attiva</Badge>;
      case "In scadenza":
        return <Badge className="bg-orange-100 text-orange-800">In scadenza</Badge>;
      case "Scaduta":
        return <Badge className="bg-red-100 text-red-800">Scaduta</Badge>;
      default:
        return <Badge variant="secondary">{stato}</Badge>;
    }
  };

  const getStatoIcon = (stato: string) => {
    switch (stato) {
      case "Attiva":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "In scadenza":
        return <Clock className="h-5 w-5 text-orange-600" />;
      case "Scaduta":
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default:
        return <Award className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Certificazioni e Pratiche</h1>
        <p className="text-gray-600 mt-1">Gestione certificazioni e monitoraggio delle pratiche in corso</p>
      </div>

      {/* Statistiche */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Certificazioni Attive</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">In Scadenza</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Scadute</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pratiche in Corso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">2</div>
          </CardContent>
        </Card>
      </div>

      {/* Certificazioni */}
      <Card>
        <CardHeader>
          <CardTitle>Le Tue Certificazioni</CardTitle>
          <CardDescription>Panoramica di tutte le certificazioni aziendali</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {certificazioni.map((cert) => (
            <div key={cert.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {getStatoIcon(cert.stato)}
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{cert.nome}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                        <span>Ente: {cert.ente}</span>
                        <span>N° {cert.numero}</span>
                      </div>
                    </div>
                    {getStatoBadge(cert.stato)}
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <div>
                        <span className="text-gray-600">Scadenza: </span>
                        <span className={cert.giorni < 0 ? "text-red-600 font-semibold" : cert.giorni < 60 ? "text-orange-600 font-semibold" : "font-medium"}>
                          {new Date(cert.scadenza).toLocaleDateString('it-IT')}
                        </span>
                        {cert.giorni >= 0 && (
                          <span className="text-gray-500 ml-2">
                            ({cert.giorni} giorni)
                          </span>
                        )}
                        {cert.giorni < 0 && (
                          <span className="text-red-600 ml-2">
                            (Scaduta da {Math.abs(cert.giorni)} giorni)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {cert.documenti.length} documenti disponibili
                    </span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Scarica Documenti
                    </Button>
                    {cert.stato === "Scaduta" || cert.stato === "In scadenza" ? (
                      <Button size="sm">
                        Avvia Rinnovo
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline">
                        Dettagli
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pratiche in Corso */}
      <Card>
        <CardHeader>
          <CardTitle>Pratiche in Corso</CardTitle>
          <CardDescription>Monitoraggio domande e richieste in lavorazione</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {praticheInCorso.map((pratica) => (
            <div key={pratica.id} className="border rounded-lg p-4">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{pratica.nome}</h3>
                    <p className="text-sm text-gray-600 mt-1">Stato attuale: {pratica.step}</p>
                  </div>
                  <Badge variant="outline">{pratica.progresso}%</Badge>
                </div>

                <div className="space-y-2">
                  <Progress value={pratica.progresso} className="h-2" />
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">
                      Prossimo passo: <span className="font-medium text-gray-900">{pratica.prossimaPasso}</span>
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Vedi Dettagli
                  </Button>
                  <Button size="sm" variant="outline">
                    Carica Documento
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Scadenze Imminenti */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
            <div className="flex-1">
              <CardTitle className="text-orange-900">Attenzione: Scadenze Imminenti</CardTitle>
              <CardDescription className="text-orange-700">Azioni richieste per evitare problemi di conformità</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-white rounded-lg p-3 border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">Patentino Fitosanitari</p>
                <p className="text-sm text-gray-600">Scade tra 37 giorni - 15 Marzo 2026</p>
              </div>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                Pianifica Rinnovo
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">HACCP</p>
                <p className="text-sm text-red-600 font-medium">Scaduta da 14 giorni</p>
              </div>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Rinnova Subito
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
