import { Instagram, Facebook, Twitter } from 'lucide-react';

export function MobileFooter() {
  return (
    <footer className="bg-[#FAFAFA] px-5 py-10">
      <div className="text-center">
        <h2 className="mb-3 text-xl">Floree</h2>
        <p className="text-[#333333]/70 text-sm mb-6">
          Bringing nature's beauty to your doorstep
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-[#333333] hover:text-[#9CB4A7] transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-[#333333] hover:text-[#9CB4A7] transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-[#333333] hover:text-[#9CB4A7] transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
        
        <div className="space-y-3 mb-8">
          <a 
            href="/about" 
            className="block text-sm text-[#333333]/70 hover:text-[#9CB4A7] transition-colors"
          >
            About Us
          </a>
          <a 
            href="/delivery" 
            className="block text-sm text-[#333333]/70 hover:text-[#9CB4A7] transition-colors"
          >
            Delivery & Payment
          </a>
        </div>
        
        <p className="text-xs text-[#333333]/50">
          © 2024 Floree. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
