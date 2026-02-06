import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Search, 
  Filter, 
  Calendar, 
  Euro, 
  MapPin,
  TrendingUp,
  Clock
} from "lucide-react";

interface BandiListProps {
  onNavigate: (section: string) => void;
}

export function BandiList({ onNavigate }: BandiListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const allBandi = [
    {
      id: 1,
      title: "PSR 2023-2027 - Investimenti in macchinari agricoli",
      categoria: "Investimenti",
      scadenza: "15 Marzo 2026",
      giorni: 37,
      importoMin: "€ 10.000",
      importoMax: "€ 50.000",
      regione: "Emilia-Romagna",
      compatibilita: 92,
      status: "Compatibile",
      descrizione: "Sostegno per l'acquisto di macchinari per migliorare la competitività aziendale"
    },
    {
      id: 2,
      title: "Sostegno primo insediamento giovani agricoltori",
      categoria: "Giovani",
      scadenza: "28 Febbraio 2026",
      giorni: 22,
      importoMin: "€ 40.000",
      importoMax: "€ 70.000",
      regione: "Nazionale",
      compatibilita: 85,
      status: "Compatibile",
      descrizione: "Premio di primo insediamento per giovani agricoltori under 40"
    },
    {
      id: 3,
      title: "Agricoltura biologica - Conversione e mantenimento",
      categoria: "Biologico",
      scadenza: "10 Aprile 2026",
      giorni: 63,
      importoMin: "€ 5.000",
      importoMax: "€ 25.000",
      regione: "Emilia-Romagna",
      compatibilita: 67,
      status: "Da verificare",
      descrizione: "Contributi per la conversione al biologico e mantenimento delle pratiche"
    },
    {
      id: 4,
      title: "Investimenti in energie rinnovabili",
      categoria: "Sostenibilità",
      scadenza: "30 Aprile 2026",
      giorni: 83,
      importoMin: "€ 20.000",
      importoMax: "€ 100.000",
      regione: "Nazionale",
      compatibilita: 75,
      status: "Compatibile",
      descrizione: "Installazione di impianti fotovoltaici, biomasse e altre fonti rinnovabili"
    },
    {
      id: 5,
      title: "Miglioramento sistemi di irrigazione",
      categoria: "Investimenti",
      scadenza: "20 Marzo 2026",
      giorni: 42,
      importoMin: "€ 15.000",
      importoMax: "€ 60.000",
      regione: "Emilia-Romagna",
      compatibilita: 88,
      status: "Compatibile",
      descrizione: "Ammodernamento e efficientamento dei sistemi irrigui"
    },
    {
      id: 6,
      title: "Sviluppo agriturismi e fattorie didattiche",
      categoria: "Diversificazione",
      scadenza: "5 Maggio 2026",
      giorni: 88,
      importoMin: "€ 30.000",
      importoMax: "€ 80.000",
      regione: "Nazionale",
      compatibilita: 45,
      status: "Non compatibile",
      descrizione: "Sostegno alla diversificazione con attività agrituristiche"
    }
  ];

  const filteredBandi = allBandi.filter(bando => 
    bando.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bando.categoria.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const compatibiliBandi = filteredBandi.filter(b => b.compatibilita >= 70);
  const altriBandi = filteredBandi.filter(b => b.compatibilita < 70);

  const BandoCard = ({ bando }: { bando: typeof allBandi[0] }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{bando.categoria}</Badge>
              <Badge variant={bando.compatibilita >= 70 ? "default" : "secondary"}>
                {bando.status}
              </Badge>
            </div>
            <CardTitle className="text-lg">{bando.title}</CardTitle>
            <CardDescription className="mt-2">{bando.descrizione}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <div>
              <div className="font-medium text-gray-900">Scadenza</div>
              <div>{bando.scadenza}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <div>
              <div className="font-medium text-gray-900">Tempo rimanente</div>
              <div className={bando.giorni < 30 ? "text-orange-600 font-semibold" : ""}>
                {bando.giorni} giorni
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Euro className="h-4 w-4" />
            <div>
              <div className="font-medium text-gray-900">Importo</div>
              <div>{bando.importoMin} - {bando.importoMax}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <div>
              <div className="font-medium text-gray-900">Ambito</div>
              <div>{bando.regione}</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="text-gray-600">Compatibilità con la tua azienda</span>
            </div>
            <span className="font-semibold">{bando.compatibilita}%</span>
          </div>
          <Progress value={bando.compatibilita} className="h-2" />
          {bando.compatibilita >= 70 && (
            <p className="text-xs text-green-600">
              ✓ Il tuo profilo aziendale soddisfa i requisiti principali
            </p>
          )}
          {bando.compatibilita < 70 && bando.compatibilita >= 50 && (
            <p className="text-xs text-orange-600">
              ⚠ Alcuni requisiti potrebbero non essere soddisfatti
            </p>
          )}
          {bando.compatibilita < 50 && (
            <p className="text-xs text-red-600">
              ✗ Il tuo profilo aziendale non soddisfa i requisiti
            </p>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            onClick={() => onNavigate('compila-bando')} 
            className="flex-1"
            disabled={bando.compatibilita < 50}
          >
            Compila Domanda
          </Button>
          <Button variant="outline">
            Vedi Dettagli
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Bandi e Finanziamenti</h1>
        <p className="text-gray-600 mt-1">Esplora le opportunità di finanziamento disponibili per la tua azienda</p>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Cerca bandi per titolo o categoria..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtri Avanzati
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="compatibili" className="space-y-6">
        <TabsList className="grid w-full md:w-auto grid-cols-2">
          <TabsTrigger value="compatibili">
            Compatibili ({compatibiliBandi.length})
          </TabsTrigger>
          <TabsTrigger value="tutti">
            Tutti i Bandi ({filteredBandi.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="compatibili" className="space-y-4">
          {compatibiliBandi.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-500">Nessun bando compatibile trovato</p>
              </CardContent>
            </Card>
          ) : (
            compatibiliBandi.map(bando => (
              <BandoCard key={bando.id} bando={bando} />
            ))
          )}
        </TabsContent>

        <TabsContent value="tutti" className="space-y-4">
          {filteredBandi.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-500">Nessun bando trovato</p>
              </CardContent>
            </Card>
          ) : (
            filteredBandi.map(bando => (
              <BandoCard key={bando.id} bando={bando} />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
