import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { BandiList } from "./components/BandiList";
import { CompilaBando } from "./components/CompilaBando";
import { Registri } from "./components/Registri";
import { Certificazioni } from "./components/Certificazioni";
import { Button } from "./components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  BookOpen, 
  Award,
  Menu,
  X,
  Sprout
} from "lucide-react";

type Section = 'dashboard' | 'bandi' | 'compila-bando' | 'registri' | 'certificazioni';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'dashboard' as Section, name: 'Dashboard', icon: LayoutDashboard },
    { id: 'bandi' as Section, name: 'Bandi', icon: FileText },
    { id: 'registri' as Section, name: 'Registri', icon: BookOpen },
    { id: 'certificazioni' as Section, name: 'Certificazioni', icon: Award },
  ];

  const handleNavigate = (section: string) => {
    setCurrentSection(section as Section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AgroGest</h1>
                <p className="text-xs text-gray-600">Burocrazia Agricola Semplificata</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => handleNavigate(item.id)}
                    className="gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => handleNavigate(item.id)}
                    className="w-full justify-start gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentSection === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
        {currentSection === 'bandi' && <BandiList onNavigate={handleNavigate} />}
        {currentSection === 'compila-bando' && <CompilaBando />}
        {currentSection === 'registri' && <Registri />}
        {currentSection === 'certificazioni' && <Certificazioni />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2026 AgroGest - Automazione burocrazia agricola italiana
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Termini</a>
              <a href="#" className="hover:text-gray-900">Supporto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
