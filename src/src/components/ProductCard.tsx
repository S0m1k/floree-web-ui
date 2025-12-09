import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  onCardClick?: () => void;
  onAddToCart?: () => void;
}

export function ProductCard({ name, price, image, onCardClick, onAddToCart }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.();
  };

  return (
    <div className="group cursor-pointer" onClick={onCardClick}>
      <div className="aspect-[3/4] overflow-hidden bg-[#FAFAFA] mb-3 relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h4 className="mb-1 text-sm">{name}</h4>
          <p className="text-[#D4A8A8] text-base" style={{ fontFamily: 'Playfair Display, serif' }}>
            {price}
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex-shrink-0 w-8 h-8 bg-[#9CB4A7] text-white flex items-center justify-center hover:bg-[#8CA497] transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}