import { Menu, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface MobileHeaderProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export function MobileHeader({ showBackButton = false, onBackClick }: MobileHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-black/10">
        <div className="flex items-center justify-between px-5 py-4">
          {showBackButton ? (
            <button onClick={onBackClick} className="p-1 -ml-1">
              <ArrowLeft className="w-6 h-6" />
            </button>
          ) : (
            <div className="w-6" />
          )}
          
          <h1 className="text-xl tracking-wider">Floree</h1>
          
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-1 -mr-1">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="fixed top-[57px] right-0 w-64 h-[calc(100vh-57px)] bg-white z-50 shadow-lg">
            <div className="p-6 space-y-6">
              <a 
                href="/" 
                className="block text-base hover:text-[#9CB4A7] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/catalog" 
                className="block text-base hover:text-[#9CB4A7] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Catalog
              </a>
              <a 
                href="/about" 
                className="block text-base hover:text-[#9CB4A7] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="/delivery" 
                className="block text-base hover:text-[#9CB4A7] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Delivery & Payment
              </a>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
