import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Clock, Users, Menu, X } from "lucide-react";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-sage text-white py-3 px-4 relative">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-lemon rounded-full flex items-center justify-center">
              <span className="text-lg">🍋</span>
            </div>
            <h1 className="text-xl font-markazi font-bold text-white">
              Little Lemon
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-lemon transition-colors text-sm">
              Home
            </Link>
            <Link
              to="/menu"
              className="hover:text-lemon transition-colors text-sm"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="hover:text-lemon transition-colors text-sm"
            >
              About
            </Link>
            <Link
              to="/reserve"
              className="hover:text-lemon transition-colors text-sm"
            >
              Reservations
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              asChild
              size="sm"
              className="bg-lemon text-sage-dark hover:bg-lemon-dark text-xs px-3 py-1"
            >
              <Link to="/reserve">Reserve</Link>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Desktop Reserve Button */}
          <Button
            asChild
            className="hidden md:block bg-lemon text-sage-dark hover:bg-lemon-dark"
          >
            <Link to="/reserve">Reserve Table</Link>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-sage border-t border-sage-light z-50">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/"
                className="block py-2 hover:text-lemon transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="block py-2 hover:text-lemon transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="block py-2 hover:text-lemon transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/reserve"
                className="block py-2 hover:text-lemon transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reservations
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-sage text-white">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-markazi font-bold mb-3 md:mb-4">
                Little Lemon
              </h1>
              <h2 className="text-xl md:text-2xl font-markazi text-lemon mb-4 md:mb-6">
                Chicago
              </h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-lemon text-sage-dark hover:bg-lemon-dark w-full md:w-auto"
              >
                <Link to="/reserve">Reserve a Table</Link>
              </Button>
            </div>
            <div className="relative mt-6 md:mt-0">
              <img
                src="https://cdn.builder.io/api/v1/assets/2b766c315be042e5a66ccefe507cd013/f64e8d485894f9df206830063adbc400d85de711-98582e?format=webp&width=800"
                alt="Grilled fish with vegetables"
                className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-markazi font-bold text-sage mb-4 md:mb-0">
              This Week's Specials!
            </h2>
            <Button
              variant="outline"
              className="border-sage text-sage hover:bg-sage hover:text-white self-start md:self-auto"
            >
              Online Menu
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Greek Salad */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/assets/2b766c315be042e5a66ccefe507cd013/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115-9ef2a1?format=webp&width=800"
                  alt="Greek Salad"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-markazi font-bold text-sage">
                    Greek Salad
                  </h3>
                  <span className="text-orange font-bold">$12.99</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  The famous Greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <Button
                  size="sm"
                  className="bg-lemon text-sage-dark hover:bg-lemon-dark w-full md:w-auto"
                >
                  Order for Delivery
                </Button>
              </CardContent>
            </Card>

            {/* Bruschetta */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/assets/2b766c315be042e5a66ccefe507cd013/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d-91868d?format=webp&width=800"
                  alt="Bruschetta"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-markazi font-bold text-sage">
                    Bruschetta
                  </h3>
                  <span className="text-orange font-bold">$8.99</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <Button
                  size="sm"
                  className="bg-lemon text-sage-dark hover:bg-lemon-dark w-full md:w-auto"
                >
                  Order for Delivery
                </Button>
              </CardContent>
            </Card>

            {/* Mediterranean Pasta */}
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/assets/2b766c315be042e5a66ccefe507cd013/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0-db0e6b?format=webp&width=800"
                  alt="Mediterranean Pasta"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-markazi font-bold text-sage">
                    Mediterranean Pasta
                  </h3>
                  <span className="text-orange font-bold">$15.99</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Fresh pasta tossed with our signature Mediterranean sauce,
                  featuring sun-dried tomatoes, olives, and fresh herbs.
                </p>
                <Button
                  size="sm"
                  className="bg-lemon text-sage-dark hover:bg-lemon-dark w-full md:w-auto"
                >
                  Order for Delivery
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-neutral-light py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-markazi font-bold text-sage text-center mb-8 md:mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                name: "Maria S.",
                rating: 5,
                review:
                  "The Greek salad was absolutely delicious! Fresh ingredients and authentic flavors.",
              },
              {
                name: "John D.",
                rating: 5,
                review:
                  "Best Mediterranean food in Chicago. The service was exceptional too!",
              },
              {
                name: "Sarah L.",
                rating: 5,
                review:
                  "Amazing atmosphere and incredible food. The bruschetta is a must-try!",
              },
              {
                name: "David R.",
                rating: 5,
                review:
                  "Perfect for a romantic dinner. The grilled fish was cooked to perfection.",
              },
            ].map((review, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-4 md:p-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-lemon text-lemon" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "{review.review}"
                  </p>
                  <p className="font-semibold text-sage">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-markazi font-bold text-sage mb-4 md:mb-6">
                Little Lemon
              </h2>
              <h3 className="text-xl md:text-2xl font-markazi text-orange mb-4 md:mb-6">
                Chicago
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment. The restaurant features a locally-sourced menu with
                daily specials.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We believe in creating memorable dining experiences through
                authentic Mediterranean cuisine, warm hospitality, and a vibrant
                atmosphere that brings people together.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-0">
              <img
                src="https://cdn.builder.io/api/v1/assets/2b766c315be042e5a66ccefe507cd013/3d3cce7a3104bf255ed0e69195e2a157338c1bff-9f4e4c?format=webp&width=800"
                alt="Chef preparing appetizers"
                className="rounded-lg shadow-lg w-full h-32 md:h-48 object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/assets/2b766c315be042e5a66ccefe507cd013/9beeddcd9d22dc711cd9fddc4a3393a7278299c7-54b071?format=webp&width=800"
                alt="Grilled fish dish"
                className="rounded-lg shadow-lg w-full h-32 md:h-48 object-cover mt-4 md:mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sage text-white py-8 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-markazi font-bold mb-4 md:mb-6">
            Ready to Dine With Us?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Book your table today and experience authentic Mediterranean cuisine
          </p>
          <div className="flex flex-col gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8">
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>123 Mediterranean Ave, Chicago, IL</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>Mon-Sun: 5:00 PM - 10:00 PM</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Users className="w-4 h-4 flex-shrink-0" />
              <span>(312) 555-0123</span>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-lemon text-sage-dark hover:bg-lemon-dark w-full md:w-auto"
          >
            <Link to="/reserve">Make a Reservation</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-dark text-white py-6 md:py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
                <div className="w-8 h-8 bg-lemon rounded-full flex items-center justify-center">
                  <span className="text-lg">🍋</span>
                </div>
                <h3 className="text-lg md:text-xl font-markazi font-bold">
                  Little Lemon
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Authentic Mediterranean cuisine in the heart of Chicago.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-lemon transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    className="hover:text-lemon transition-colors"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-lemon transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reserve"
                    className="hover:text-lemon transition-colors"
                  >
                    Reservations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>123 Mediterranean Ave</li>
                <li>Chicago, IL 60601</li>
                <li>(312) 555-0123</li>
                <li>info@littlelemon.com</li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Mon-Thu: 5PM - 10PM</li>
                <li>Fri-Sat: 5PM - 11PM</li>
                <li>Sunday: 5PM - 9PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 Little Lemon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
