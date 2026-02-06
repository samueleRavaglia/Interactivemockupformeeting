import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { 
  Sparkles, 
  CheckCircle, 
  AlertCircle, 
  Info,
  ChevronRight,
  ChevronLeft,
  Save,
  Send
} from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

export function CompilaBando() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    ragioneSociale: "Azienda Agricola Rossi S.S.",
    partitaIva: "IT12345678901",
    codiceFiscale: "RSSMRA80A01H501Z",
    sede: "Via Campo, 15 - 42100 Reggio Emilia (RE)",
    superficie: "35",
    colture: "Frumento, Mais, Erba medica",
    investimento: "",
    importoRichiesto: "",
    descrizione: ""
  });

  const steps = [
    {
      id: 0,
      title: "Dati Anagrafici",
      description: "Informazioni azienda e rappresentante legale"
    },
    {
      id: 1,
      title: "Dati Tecnici",
      description: "Superficie, colture e attività"
    },
    {
      id: 2,
      title: "Progetto",
      description: "Descrizione investimento richiesto"
    },
    {
      id: 3,
      title: "Revisione",
      description: "Controlla e invia la domanda"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Compila Domanda di Finanziamento</h1>
        <p className="text-gray-600 mt-1">PSR 2023-2027 - Investimenti in macchinari agricoli</p>
      </div>

      {/* Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Progresso compilazione</span>
              <span className="text-sm text-gray-600">{currentStep + 1} di {steps.length}</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="grid grid-cols-4 gap-2">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`text-center ${index <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}
                >
                  <div className="text-xs font-medium">{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Assistant Alert */}
      <Alert className="border-blue-200 bg-blue-50">
        <Sparkles className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-900">
          <strong>Assistente IA attivo:</strong> I campi sono pre-compilati con i dati della tua anagrafica aziendale. Verifica e modifica dove necessario.
        </AlertDescription>
      </Alert>

      {/* Form Steps */}
      {currentStep === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Dati Anagrafici</CardTitle>
            <CardDescription>Informazioni già registrate nel sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="ragioneSociale">
                Ragione Sociale
                <Badge variant="secondary" className="ml-2 text-xs">Auto-compilato</Badge>
              </Label>
              <Input
                id="ragioneSociale"
                value={formData.ragioneSociale}
                onChange={(e) => handleInputChange('ragioneSociale', e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="partitaIva">
                  Partita IVA
                  <Badge variant="secondary" className="ml-2 text-xs">Auto-compilato</Badge>
                </Label>
                <Input
                  id="partitaIva"
                  value={formData.partitaIva}
                  onChange={(e) => handleInputChange('partitaIva', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="codiceFiscale">
                  Codice Fiscale Rappresentante
                  <Badge variant="secondary" className="ml-2 text-xs">Auto-compilato</Badge>
                </Label>
                <Input
                  id="codiceFiscale"
                  value={formData.codiceFiscale}
                  onChange={(e) => handleInputChange('codiceFiscale', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sede">
                Sede Legale
                <Badge variant="secondary" className="ml-2 text-xs">Auto-compilato</Badge>
              </Label>
              <Input
                id="sede"
                value={formData.sede}
                onChange={(e) => handleInputChange('sede', e.target.value)}
              />
            </div>

            <Alert>
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription>
                Tutti i dati anagrafici sono stati verificati con il registro delle imprese.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Dati Tecnici Aziendali</CardTitle>
            <CardDescription>Caratteristiche dell'attività agricola</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="superficie">
                Superficie Agricola Totale (ettari)
                <Badge variant="secondary" className="ml-2 text-xs">Da registro terreni</Badge>
              </Label>
              <Input
                id="superficie"
                type="number"
                value={formData.superficie}
                onChange={(e) => handleInputChange('superficie', e.target.value)}
                placeholder="35"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="colture">
                Colture Principali
                <Badge variant="secondary" className="ml-2 text-xs">Da fascicolo aziendale</Badge>
              </Label>
              <Textarea
                id="colture"
                value={formData.colture}
                onChange={(e) => handleInputChange('colture', e.target.value)}
                placeholder="Elenca le colture principali..."
                rows={3}
              />
            </div>

            <Alert className="border-blue-200 bg-blue-50">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-900">
                <strong>Suggerimento:</strong> La tua azienda ha i requisiti per richiedere fino a € 50.000 in base alla superficie coltivata.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Descrizione dell'Investimento</CardTitle>
            <CardDescription>Dettagli del progetto per cui richiedi il finanziamento</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="investimento">Tipo di Investimento</Label>
              <Input
                id="investimento"
                value={formData.investimento}
                onChange={(e) => handleInputChange('investimento', e.target.value)}
                placeholder="es. Acquisto trattore e attrezzature"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="importoRichiesto">Importo Richiesto (€)</Label>
              <Input
                id="importoRichiesto"
                type="number"
                value={formData.importoRichiesto}
                onChange={(e) => handleInputChange('importoRichiesto', e.target.value)}
                placeholder="45000"
              />
              <p className="text-sm text-gray-500">Importo massimo richiedibile: € 50.000</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="descrizione">Descrizione Dettagliata del Progetto</Label>
              <Textarea
                id="descrizione"
                value={formData.descrizione}
                onChange={(e) => handleInputChange('descrizione', e.target.value)}
                placeholder="Descrivi in dettaglio l'investimento, gli obiettivi e i benefici attesi..."
                rows={6}
              />
              <div className="flex items-center justify-between text-sm">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    handleInputChange('descrizione', 
                      'L\'investimento prevede l\'acquisto di un trattore di ultima generazione e attrezzature complementari per migliorare l\'efficienza operativa dell\'azienda. L\'obiettivo è ridurre i tempi di lavorazione del 30% e diminuire i consumi di carburante del 25% grazie alle nuove tecnologie. Il progetto contribuirà alla sostenibilità ambientale e alla competitività aziendale.'
                    );
                  }}
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Genera con IA
                </Button>
                <span className="text-gray-500">{formData.descrizione.length} caratteri</span>
              </div>
            </div>

            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-900">
                <strong>Ottimo!</strong> Il tuo progetto è in linea con gli obiettivi del bando.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Revisione Domanda</CardTitle>
            <CardDescription>Controlla i dati prima dell'invio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-3">Dati Anagrafici</h3>
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-gray-600">Ragione Sociale</dt>
                    <dd className="font-medium">{formData.ragioneSociale}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">Partita IVA</dt>
                    <dd className="font-medium">{formData.partitaIva}</dd>
                  </div>
                </dl>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-3">Dati Tecnici</h3>
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-gray-600">Superficie</dt>
                    <dd className="font-medium">{formData.superficie} ettari</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">Colture</dt>
                    <dd className="font-medium">{formData.colture}</dd>
                  </div>
                </dl>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-3">Investimento</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-600">Tipo</dt>
                    <dd className="font-medium">{formData.investimento || "Non specificato"}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">Importo Richiesto</dt>
                    <dd className="font-medium">€ {formData.importoRichiesto || "0"}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">Descrizione</dt>
                    <dd className="font-medium">{formData.descrizione || "Non specificato"}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4 text-orange-600" />
              <AlertDescription>
                Controlla attentamente tutti i dati. Dopo l'invio non sarà possibile modificare la domanda.
              </AlertDescription>
            </Alert>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-green-900 mb-1">Validazione Automatica Completata</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>✓ Tutti i campi obbligatori compilati</li>
                    <li>✓ Dati anagrafici verificati</li>
                    <li>✓ Requisiti di ammissibilità soddisfatti</li>
                    <li>✓ Importo richiesto nei limiti del bando</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Indietro
            </Button>

            <div className="flex gap-2">
              <Button variant="outline">
                <Save className="h-4 w-4 mr-2" />
                Salva Bozza
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}>
                  Avanti
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button className="bg-green-600 hover:bg-green-700">
                  <Send className="h-4 w-4 mr-2" />
                  Invia Domanda
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
