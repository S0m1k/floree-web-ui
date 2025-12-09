import { useState, useEffect } from 'react';
import { MobileHeader } from './components/MobileHeader';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { FeatureBlock } from './components/FeatureBlock';
import { MobileFooter } from './components/MobileFooter';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Sparkles, Truck, Leaf, Clock, MapPin, Phone, Mail, CreditCard, Wallet, Banknote } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

// Product data
const products = [
  {
    id: 1,
    name: 'Classic Rose Bouquet',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1649140938067-42249b19446e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJvc2VzJTIwYm91cXVldHxlbnwxfHx8fDE3NjM0MTQ3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'roses',
    description: 'Timeless elegance with fresh white roses hand-arranged with delicate greenery. Perfect for any occasion or as a thoughtful gesture.'
  },
  {
    id: 2,
    name: 'Elegant Pink Peonies',
    price: '$52',
    image: 'https://images.unsplash.com/photo-1556890338-d0f2f5adf185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcGVvbmllcyUyMG1pbmltYWx8ZW58MXx8fHwxNzYzNDE0NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bouquets',
    description: 'Luxurious pink peonies in full bloom, showcasing nature\'s most romantic flower. A symbol of prosperity and good fortune.'
  },
  {
    id: 3,
    name: 'Lavender Dreams',
    price: '$38',
    image: 'https://images.unsplash.com/photo-1596576703684-4a6515d0a547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGZsb3dlcnMlMjBidW5jaHxlbnwxfHx8fDE3NjM0MTQ3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'seasonal',
    description: 'Fragrant lavender bundles that bring calm and serenity to any space. Naturally dried for long-lasting beauty and aromatherapy benefits.'
  },
  {
    id: 4,
    name: 'Monstera Plant',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBsYW50JTIwaW5kb29yfGVufDF8fHx8MTc2MzQxNTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'plants',
    description: 'A stunning tropical statement plant with iconic split leaves. Low-maintenance and perfect for adding a modern, jungle vibe to your home.'
  },
  {
    id: 5,
    name: 'Spring Tulips',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1589994160839-163cd867cfe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dWxpcHMlMjBib3VxdWV0fGVufDF8fHx8MTc2MzQwMzg1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'seasonal',
    description: 'Vibrant seasonal tulips that herald the arrival of spring. These cheerful blooms bring fresh energy and color to brighten any room.'
  },
  {
    id: 6,
    name: 'Luxury Arrangement',
    price: '$75',
    image: 'https://images.unsplash.com/photo-1560113405-0c86fcd406ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbG93ZXIlMjBib3VxdWV0fGVufDF8fHx8MTc2MzQxNTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bouquets',
    description: 'Our premium mixed arrangement featuring the finest seasonal blooms. Expertly designed for those who appreciate exceptional quality.'
  },
  {
    id: 7,
    name: 'Wildflower Mix',
    price: '$42',
    image: 'https://images.unsplash.com/photo-1628363462308-68313cc1470b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VyJTIwYm91cXVldHxlbnwxfHx8fDE3NjMzNjUwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bouquets',
    description: 'A charming collection of wildflowers that captures the essence of meadows in bloom. Organic, free-spirited, and naturally beautiful.'
  },
  {
    id: 8,
    name: 'Dried Flowers',
    price: '$48',
    image: 'https://images.unsplash.com/photo-1699647040299-d7c742ad0768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGZsb3dlcnMlMjBtaW5pbWFsfGVufDF8fHx8MTc2MzM3OTQ2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'seasonal',
    description: 'Artfully preserved blooms in warm, earthy tones. These dried arrangements offer lasting beauty with zero maintenance required.'
  },
  {
    id: 9,
    name: 'Exotic Protea',
    price: '$58',
    image: 'https://images.unsplash.com/photo-1760275228743-6feb4992eedf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWElMjBmbG93ZXJzJTIwZXhvdGljfGVufDF8fHx8MTc2MzQxNTM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bouquets',
    description: 'Bold and distinctive protea blooms that make a striking statement. These exotic flowers are perfect for modern, contemporary spaces.'
  },
  {
    id: 10,
    name: 'White Orchid',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1566553253535-64c91138b407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoaWQlMjB3aGl0ZSUyMG1pbmltYWx8ZW58MXx8fHwxNzYzNDE0NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'plants',
    description: 'Graceful white orchid in a minimalist pot. A sophisticated living gift that blooms for months with proper care.'
  },
  {
    id: 11,
    name: 'Sunflower Bunch',
    price: '$40',
    image: 'https://images.unsplash.com/photo-1601884928885-92a922f7962f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXJzJTIwbWluaW1hbHxlbnwxfHx8fDE3NjM0MTQ3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'seasonal',
    description: 'Bright, cheerful sunflowers that instantly lift spirits. These sunny blooms symbolize happiness, warmth, and positive energy.'
  },
  {
    id: 12,
    name: 'Red Rose Elegance',
    price: '$50',
    image: 'https://images.unsplash.com/photo-1759004612201-87c2bad9eb3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcm9zZXMlMjBhcnJhbmdlbWVudHxlbnwxfHx8fDE3NjMzMTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'roses',
    description: 'Classic red roses arranged with care and passion. The ultimate expression of love, romance, and deep admiration.'
  }
];

// Hero images for carousel
const heroImages = [
  'https://images.unsplash.com/photo-1560113405-0c86fcd406ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbG93ZXIlMjBib3VxdWV0fGVufDF8fHx8MTc2MzQxNTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1649140938067-42249b19446e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJvc2VzJTIwYm91cXVldHxlbnwxfHx8fDE3NjM0MTQ3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1556890338-d0f2f5adf185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcGVvbmllcyUyMG1pbmltYWx8ZW58MXx8fHwxNzYzNDE0NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
];

type Page = 'home' | 'catalog' | 'about' | 'delivery';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-rotate hero images
  useEffect(() => {
    if (currentPage === 'home') {
      const interval = setInterval(() => {
        setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentPage]);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (productName: string) => {
    alert(`Added "${productName}" to cart!`);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Homepage
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-white max-w-[375px] mx-auto">
        <MobileHeader />
        
        {/* Hero Section - Auto-rotating Gallery */}
        <section className="relative h-screen">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ImageWithFallback
                src={image}
                alt="Floral arrangement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
          
          <div className="relative h-full flex flex-col items-center justify-center px-5 text-center text-white">
            <h1 className="mb-6 text-white text-4xl">Floree</h1>
            <button 
              onClick={() => handleNavigation('catalog')}
              className="bg-white text-black px-8 py-3 hover:bg-[#FAFAFA] transition-colors"
            >
              Shop Now
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentHeroImage ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="px-5 py-12">
          <h3 className="mb-6 text-center">Featured Collection</h3>
          
          <div className="space-y-6">
            {products.slice(0, 9).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onCardClick={() => handleProductClick(product)}
                onAddToCart={() => handleAddToCart(product.name)}
              />
            ))}
          </div>
          
          {/* More Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => handleNavigation('catalog')}
              className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              More
            </button>
          </div>
        </section>
        
        {/* Product Modal */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onAddToCart={() => handleAddToCart(selectedProduct.name)}
          />
        )}

        {/* Our Advantages */}
        <section className="px-5 py-12 bg-[#FAFAFA]">
          <h3 className="mb-8 text-center">Why Choose Floree</h3>
          
          <div>
            <FeatureBlock
              icon={Sparkles}
              title="Freshness Guaranteed"
              description="All flowers are hand-picked daily from trusted local growers"
            />
            <FeatureBlock
              icon={Truck}
              title="Free Delivery"
              description="Complimentary same-day delivery on orders over $50"
            />
            <FeatureBlock
              icon={Leaf}
              title="Sustainable Practices"
              description="Eco-friendly packaging and locally sourced blooms"
            />
            <FeatureBlock
              icon={Clock}
              title="Always Available"
              description="Order 24/7 online with flexible delivery scheduling"
            />
          </div>
        </section>

        <MobileFooter />
      </div>
    );
  }

  // Catalog Page
  if (currentPage === 'catalog') {
    return (
      <div className="min-h-screen bg-white max-w-[375px] mx-auto">
        <MobileHeader showBackButton onBackClick={() => handleNavigation('home')} />
        
        {/* Category Filter */}
        <div className="sticky top-[57px] bg-white border-b border-black/10 z-40">
          <div className="overflow-x-auto px-5 py-4">
            <div className="flex gap-2" style={{ width: 'max-content' }}>
              {[
                { id: 'all', label: 'All' },
                { id: 'bouquets', label: 'Bouquets' },
                { id: 'plants', label: 'House Plants' },
                { id: 'roses', label: 'Roses' },
                { id: 'seasonal', label: 'Seasonal' }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#9CB4A7] text-white'
                      : 'bg-[#FAFAFA] text-[#333333] hover:bg-[#9CB4A7]/20'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-5 py-6 grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onCardClick={() => handleProductClick(product)}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onAddToCart={() => handleAddToCart(selectedProduct.name)}
          />
        )}

        <MobileFooter />
      </div>
    );
  }

  // About Us Page
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-white max-w-[375px] mx-auto">
        <MobileHeader showBackButton onBackClick={() => handleNavigation('home')} />
        
        {/* Shop Interior Photo */}
        <div className="w-full h-[280px]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1730731865107-76da44e59ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBzaG9wJTIwc3RvcmVmcm9udHxlbnwxfHx8fDE3NjMzNjUwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Floree shop interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Block */}
        <div className="px-5 py-10">
          <h2 className="mb-6 text-center">Our Story</h2>
          <p className="mb-4 text-center">
            Welcome to Floree, where every bloom tells a story. Founded in 2020, we've been dedicated to bringing the beauty of nature into homes across the city.
          </p>
          <p className="mb-4 text-center">
            Our passion lies in curating the finest seasonal flowers and creating arrangements that celebrate life's precious moments. From intimate gatherings to grand celebrations, we believe every occasion deserves the perfect floral touch.
          </p>
          <p className="text-center">
            We work closely with local growers who share our commitment to quality and sustainability, ensuring that every bouquet is fresh, vibrant, and ethically sourced.
          </p>
        </div>

        {/* Contact Block */}
        <div className="px-5 py-8 bg-[#FAFAFA]">
          <h3 className="mb-6 text-center">Visit Us</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#9CB4A7] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm">123 Garden Street</p>
                <p className="text-sm">New York, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#9CB4A7] flex-shrink-0" />
              <p className="text-sm">(555) 123-4567</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#9CB4A7] flex-shrink-0" />
              <p className="text-sm">hello@floree.com</p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="px-5 py-8">
          <div className="border border-black/10 bg-[#FAFAFA]/50 h-[240px] flex items-center justify-center">
            <p className="text-sm text-[#333333]/50">Yandex Maps Integration Here</p>
          </div>
        </div>

        <MobileFooter />
      </div>
    );
  }

  // Delivery & Payment Page
  if (currentPage === 'delivery') {
    return (
      <div className="min-h-screen bg-white max-w-[375px] mx-auto">
        <MobileHeader showBackButton onBackClick={() => handleNavigation('home')} />
        
        <div className="px-5 py-10">
          <h2 className="mb-8 text-center">Delivery & Payment</h2>
          
          {/* Delivery Options */}
          <section className="mb-12">
            <h3 className="mb-6">Delivery Options</h3>
            
            <div className="space-y-6">
              <div className="pb-6 border-b border-black/10">
                <h4 className="mb-2 text-base">Same-Day Courier</h4>
                <p className="text-sm text-[#333333]/70 leading-relaxed">
                  Order before 2 PM for same-day delivery within city limits. Perfect for last-minute gifts and special occasions.
                </p>
                <p className="text-sm text-[#9CB4A7] mt-2">Free on orders over $50</p>
              </div>
              
              <div className="pb-6 border-b border-black/10">
                <h4 className="mb-2 text-base">Express Delivery</h4>
                <p className="text-sm text-[#333333]/70 leading-relaxed">
                  Next-day delivery available for all areas. Choose your preferred time slot during checkout.
                </p>
                <p className="text-sm text-[#9CB4A7] mt-2">$8.99</p>
              </div>
              
              <div className="pb-6 border-b border-black/10">
                <h4 className="mb-2 text-base">Store Pickup</h4>
                <p className="text-sm text-[#333333]/70 leading-relaxed">
                  Collect your order from our shop at your convenience. We'll have it ready within 2 hours.
                </p>
                <p className="text-sm text-[#9CB4A7] mt-2">Free</p>
              </div>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="mb-12">
            <h3 className="mb-6">Payment Methods</h3>
            <p className="text-sm text-[#333333]/70 mb-6 leading-relaxed">
              We accept all major payment methods for your convenience:
            </p>
            
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-3 border border-black/10 bg-[#FAFAFA]">
                <CreditCard className="w-5 h-5 text-[#333333]" />
                <span className="text-sm">Credit Card</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 border border-black/10 bg-[#FAFAFA]">
                <Wallet className="w-5 h-5 text-[#333333]" />
                <span className="text-sm">Digital Wallet</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 border border-black/10 bg-[#FAFAFA]">
                <Banknote className="w-5 h-5 text-[#333333]" />
                <span className="text-sm">Cash</span>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h3 className="mb-6">Frequently Asked Questions</h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-black/10 px-4">
                <AccordionTrigger className="text-sm hover:no-underline">
                  What areas do you deliver to?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#333333]/70 leading-relaxed">
                  We deliver within a 25-mile radius of our New York City location. Same-day delivery is available within 10 miles. For areas outside our delivery zone, please contact us for special arrangements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-black/10 px-4">
                <AccordionTrigger className="text-sm hover:no-underline">
                  How much does delivery cost?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#333333]/70 leading-relaxed">
                  Same-day delivery is free on orders over $50, otherwise $12.99. Express next-day delivery is $8.99. Store pickup is always free.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-black/10 px-4">
                <AccordionTrigger className="text-sm hover:no-underline">
                  Can I schedule a delivery for a specific time?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#333333]/70 leading-relaxed">
                  Yes! During checkout, you can select from available time slots. We offer morning (9 AM - 12 PM), afternoon (12 PM - 5 PM), and evening (5 PM - 8 PM) windows.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-black/10 px-4">
                <AccordionTrigger className="text-sm hover:no-underline">
                  What if I'm not home for delivery?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#333333]/70 leading-relaxed">
                  Our courier will contact you via phone. You can provide special delivery instructions during checkout, such as leaving with a neighbor or in a safe location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-black/10 px-4">
                <AccordionTrigger className="text-sm hover:no-underline">
                  Do you offer a freshness guarantee?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#333333]/70 leading-relaxed">
                  Absolutely! All our flowers come with a 7-day freshness guarantee. If you're not satisfied, contact us within 48 hours of delivery for a full refund or replacement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        <MobileFooter />
      </div>
    );
  }

  return null;
}