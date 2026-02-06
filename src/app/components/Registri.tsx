import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  BookOpen, 
  Plus, 
  Download,
  Sprout,
  Droplet,
  Trash2,
  Calendar as CalendarIcon
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export function Registri() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("fitosanitari");

  const registriFitosanitari = [
    {
      id: 1,
      data: "2026-02-03",
      coltura: "Frumento",
      prodotto: "Erbicida XYZ",
      quantita: "2.5 L",
      superficie: "10 ha",
      operatore: "Mario Rossi"
    },
    {
      id: 2,
      data: "2026-01-28",
      coltura: "Mais",
      prodotto: "Fungicida ABC",
      quantita: "1.8 L",
      superficie: "8 ha",
      operatore: "Mario Rossi"
    },
    {
      id: 3,
      data: "2026-01-15",
      coltura: "Frumento",
      prodotto: "Concime NPK 20-10-10",
      quantita: "300 kg",
      superficie: "15 ha",
      operatore: "Luca Bianchi"
    }
  ];

  const registriCarico = [
    {
      id: 1,
      data: "2026-02-01",
      tipo: "Carico",
      prodotto: "Erbicida XYZ",
      quantita: "10 L",
      fornitore: "Agriforniture SRL",
      documento: "DDT 123/2026"
    },
    {
      id: 2,
      data: "2026-01-20",
      tipo: "Scarico",
      prodotto: "Erbicida XYZ",
      quantita: "2.5 L",
      riferimento: "Registro fitosanitari #1",
      documento: "-"
    },
    {
      id: 3,
      data: "2026-01-15",
      tipo: "Carico",
      prodotto: "Fungicida ABC",
      quantita: "5 L",
      fornitore: "Agrisud SNC",
      documento: "DDT 089/2026"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Registri Aziendali</h1>
          <p className="text-gray-600 mt-1">Gestione digitale dei registri obbligatori</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Esporta PDF
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full md:w-auto grid-cols-2">
          <TabsTrigger value="fitosanitari">
            <Sprout className="h-4 w-4 mr-2" />
            Trattamenti Fitosanitari
          </TabsTrigger>
          <TabsTrigger value="carico-scarico">
            <Droplet className="h-4 w-4 mr-2" />
            Carico/Scarico Prodotti
          </TabsTrigger>
        </TabsList>

        {/* Registro Fitosanitari */}
        <TabsContent value="fitosanitari" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Registro Trattamenti Fitosanitari</CardTitle>
                  <CardDescription>Tracciabilità completa dei trattamenti effettuati</CardDescription>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Nuovo Trattamento
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Registra Nuovo Trattamento</DialogTitle>
                      <DialogDescription>
                        Compila i dati del trattamento fitosanitario effettuato
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="data">Data Trattamento</Label>
                          <Input id="data" type="date" defaultValue="2026-02-06" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="coltura">Coltura</Label>
                          <Select>
                            <SelectTrigger id="coltura">
                              <SelectValue placeholder="Seleziona coltura" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="frumento">Frumento</SelectItem>
                              <SelectItem value="mais">Mais</SelectItem>
                              <SelectItem value="erba">Erba medica</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="prodotto">Prodotto Fitosanitario</Label>
                          <Input id="prodotto" placeholder="Nome prodotto" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="quantita">Quantità Utilizzata</Label>
                          <Input id="quantita" placeholder="es. 2.5 L" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="superficie">Superficie Trattata (ha)</Label>
                          <Input id="superficie" type="number" placeholder="10" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="operatore">Operatore</Label>
                          <Input id="operatore" placeholder="Nome operatore" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="note">Note</Label>
                        <Textarea id="note" placeholder="Eventuali note aggiuntive..." rows={3} />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Annulla
                      </Button>
                      <Button onClick={() => setIsDialogOpen(false)}>
                        Salva Registrazione
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Data</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Coltura</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Prodotto</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Quantità</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Superficie</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Operatore</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Azioni</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registriFitosanitari.map((registro) => (
                        <tr key={registro.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm">
                            {new Date(registro.data).toLocaleDateString('it-IT')}
                          </td>
                          <td className="py-3 px-4 text-sm">
                            <Badge variant="outline">{registro.coltura}</Badge>
                          </td>
                          <td className="py-3 px-4 text-sm font-medium">{registro.prodotto}</td>
                          <td className="py-3 px-4 text-sm">{registro.quantita}</td>
                          <td className="py-3 px-4 text-sm">{registro.superficie}</td>
                          <td className="py-3 px-4 text-sm">{registro.operatore}</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Registro Carico/Scarico */}
        <TabsContent value="carico-scarico" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Registro Carico/Scarico Prodotti Fitosanitari</CardTitle>
                  <CardDescription>Tracciamento magazzino prodotti</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Nuova Movimentazione
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Data</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Tipo</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Prodotto</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Quantità</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Riferimento</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Documento</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Azioni</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registriCarico.map((registro) => (
                        <tr key={registro.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm">
                            {new Date(registro.data).toLocaleDateString('it-IT')}
                          </td>
                          <td className="py-3 px-4 text-sm">
                            <Badge variant={registro.tipo === 'Carico' ? 'default' : 'secondary'}>
                              {registro.tipo}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sm font-medium">{registro.prodotto}</td>
                          <td className="py-3 px-4 text-sm">{registro.quantita}</td>
                          <td className="py-3 px-4 text-sm">
                            {'fornitore' in registro ? registro.fornitore : registro.riferimento}
                          </td>
                          <td className="py-3 px-4 text-sm">{registro.documento}</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Giacenze Attuali</h4>
                        <div className="space-y-1 text-sm text-blue-800">
                          <div className="flex justify-between">
                            <span>Erbicida XYZ:</span>
                            <span className="font-semibold">7.5 L</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fungicida ABC:</span>
                            <span className="font-semibold">3.2 L</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Concime NPK 20-10-10:</span>
                            <span className="font-semibold">0 kg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
