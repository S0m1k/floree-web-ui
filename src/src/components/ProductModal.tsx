import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductModalProps {
  product: {
    name: string;
    price: string;
    image: string;
    description: string;
  };
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
}

export function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-5"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-[340px] w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#FAFAFA] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Product Image */}
          <div className="w-full aspect-square bg-[#FAFAFA]">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="p-6">
            <h3 className="mb-3">{product.name}</h3>
            <p className="text-sm text-[#333333]/70 leading-relaxed mb-4">
              {product.description}
            </p>
          </div>
        </div>

        {/* Bottom Bar - Price & Add to Cart */}
        <div className="border-t border-black/10 p-5 bg-white flex items-center justify-between gap-4">
          <div className="text-[#D4A8A8] text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            {product.price}
          </div>
          <button
            onClick={onAddToCart}
            className="flex-1 bg-black text-white py-3 px-6 hover:bg-[#333333] transition-colors text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
