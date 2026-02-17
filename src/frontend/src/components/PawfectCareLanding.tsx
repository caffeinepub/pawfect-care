import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sparkles, Scissors, Bath, Heart, Star, CheckCircle2, Clock, Shield, Award, Smile, Phone, Mail } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import MobileInHandIcon from './icons/MobileInHandIcon';
import SafeImage from './SafeImage';
import { publicAssetUrl } from '@/lib/publicAssetUrl';

export default function PawfectCareLanding() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'pawfect-care';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold text-primary">Pawfect Care</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#faq" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          <Button size="sm" className="rounded-full">
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 to-background py-20 md:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
                <Sparkles className="mr-1.5 h-3.5 w-3.5 inline" />
                Premium Pet Grooming
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Your Pet's
                  <span className="block text-primary mt-2">Pawfect Day</span>
                  Starts Here
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl max-w-xl">
                  Professional grooming services that make tails wag and whiskers twitch with joy. 
                  We treat every pet like family!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-base px-8">
                  Schedule Grooming
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base px-8">
                  View Services
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">5,000+ Happy Pets</div>
                    <div className="text-muted-foreground">Groomed with love</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted shadow-2xl">
                <SafeImage
                  src={publicAssetUrl('/assets/image-10.png')}
                  alt="Happy groomed pet"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div className="text-sm font-semibold">5.0 Rating</div>
                <div className="text-xs opacity-90">From 1,200+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Pawfect Care - Overview Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              About Pawfect Care
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What is Pawfect Care?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in professional pet grooming, backed by Chewy's commitment to quality and care.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Premium Grooming You Can Trust</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Pawfect Care, we understand that your pet deserves the very best. That's why we've partnered 
                with <span className="font-semibold text-foreground">almost 100 Chewy-verified grooming professionals</span> who 
                share our passion for exceptional pet care.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every groomer in our network has been carefully vetted and certified by Chewy to ensure they meet 
                our rigorous standards for safety, expertise, and compassionate care. When you choose Pawfect Care, 
                you're choosing peace of mind.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Chewy-Verified</div>
                    <div className="text-sm text-muted-foreground">All partners certified</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">100+ Partners</div>
                    <div className="text-sm text-muted-foreground">Trusted professionals</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <SafeImage
                    src={publicAssetUrl('/assets/image.png')}
                    alt="Spa treatment for cats"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <SafeImage
                    src={publicAssetUrl('/assets/image-4.png')}
                    alt="Happy pet after grooming"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <SafeImage
                    src={publicAssetUrl('/assets/image-8.png')}
                    alt="Professional bath service"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <SafeImage
                    src={publicAssetUrl('/assets/image-11.png')}
                    alt="Pet grooming session"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/20 rounded-3xl p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Verified Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Happy Pets Groomed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5.0</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pet Care Matters */}
      <section className="py-20 md:py-28 bg-accent/10">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <SafeImage
                  src={publicAssetUrl('/assets/image-5.png')}
                  alt="Pet enjoying outdoor time"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5">
                Why It Matters
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Pet Care is More Than Just Grooming
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Regular grooming isn't just about keeping your pet looking good—it's essential for their health, 
                comfort, and happiness. At Chewy, we believe every pet deserves professional care that goes beyond 
                the surface.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Health Monitoring</div>
                    <div className="text-muted-foreground">Early detection of skin issues, lumps, or parasites</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Comfort & Hygiene</div>
                    <div className="text-muted-foreground">Prevents matting, reduces shedding, and keeps skin healthy</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Bonding Experience</div>
                    <div className="text-muted-foreground">Positive grooming builds trust and reduces anxiety</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Convenient Access to Care */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="h-16 w-16 flex-shrink-0">
                <MobileInHandIcon className="h-full w-full text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Convenient Access to Care
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Managing your pet's grooming has never been easier. Book appointments, track grooming history, 
                  receive before-and-after photos, and get personalized care recommendations—all from your phone.
                </p>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 rounded-2xl border-2">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Easy Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  Book, reschedule, or cancel appointments with just a few taps
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-2">
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Real-Time Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Get notifications when grooming starts, during service, and when ready for pickup
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-2">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Groomer Notes</h3>
                <p className="text-sm text-muted-foreground">
                  Receive personalized care tips and recommendations after each visit
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-accent/10">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Tailored Grooming for Every Pet
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From basic baths to full spa treatments, we offer comprehensive grooming services 
              designed to keep your pet healthy, happy, and looking their best.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden rounded-2xl border-2 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <SafeImage
                  src={publicAssetUrl('/assets/image-20.png')}
                  alt="Bath and brush service"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Bath className="h-5 w-5 text-primary" />
                  <CardTitle>Bath & Brush</CardTitle>
                </div>
                <CardDescription>
                  Complete bath with premium shampoo, thorough brushing, nail trim, and ear cleaning. 
                  Perfect for maintaining your pet's coat between full grooming sessions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">From $45</span>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-2xl border-2 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <SafeImage
                  src={publicAssetUrl('/assets/image-7.png')}
                  alt="Full grooming service"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Scissors className="h-5 w-5 text-primary" />
                  <CardTitle>Full Grooming</CardTitle>
                </div>
                <CardDescription>
                  The complete package: bath, haircut styled to breed standards or your preference, 
                  nail trim, ear cleaning, and teeth brushing. Your pet will look and feel amazing!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">From $75</span>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-2xl border-2 hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <SafeImage
                  src={publicAssetUrl('/assets/image-19.png')}
                  alt="Spa treatment service"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <CardTitle>Spa Treatment</CardTitle>
                </div>
                <CardDescription>
                  Luxury pampering with deep conditioning treatment, pawdicure, facial scrub, 
                  and aromatherapy. The ultimate relaxation experience for your beloved companion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">From $95</span>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="rounded-full text-base px-8">
              View All Services & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Happy Pets, Happy Hearts - Gallery Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              <Heart className="mr-1.5 h-3.5 w-3.5 inline" />
              Happy Pets, Happy Hearts
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              See the Pawfect Care Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every grooming session is a chance to show your pet some extra love. 
              Here's a glimpse of our professional care in action.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <SafeImage
                src={publicAssetUrl('/assets/image-13.png')}
                alt="Dog nail cutting service"
                className="h-full w-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <SafeImage
                src={publicAssetUrl('/assets/image-14.png')}
                alt="Dog teeth cleaning service"
                className="h-full w-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <SafeImage
                src={publicAssetUrl('/assets/image-15.png')}
                alt="Dog ear cleaning service"
                className="h-full w-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Professional care for every aspect of your pet's grooming needs
            </p>
            <Button size="lg" className="rounded-full text-base px-8">
              Book Your Pet's Grooming
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-accent/10">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How Pawfect Care Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Getting started is easy. Just four simple steps to give your pet the care they deserve.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold">Create Profile</h3>
              <p className="text-muted-foreground">
                Tell us about your pet's breed, size, and any special needs or preferences
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold">Choose Service</h3>
              <p className="text-muted-foreground">
                Select from our range of grooming services and pick a convenient time
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold">Drop Off</h3>
              <p className="text-muted-foreground">
                Bring your pet to your chosen Chewy-verified groomer at the scheduled time
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold">Pick Up Happy</h3>
              <p className="text-muted-foreground">
                Collect your freshly groomed, happy pet and receive care notes from the groomer
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-full text-base px-8">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Pet Parents Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it—hear from the humans (and pets!) who love Pawfect Care.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="p-6 rounded-2xl border-2">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "My golden retriever Max has never looked better! The groomer was so gentle and patient with him. 
                I love getting the photos during the appointment—it gives me peace of mind."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Smile className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-sm text-muted-foreground">Max's Mom</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Booking through the app is so convenient! Luna used to hate grooming, but the team at Pawfect Care 
                made her feel comfortable. She actually seems excited to go now!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Smile className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">James T.</div>
                  <div className="text-sm text-muted-foreground">Luna's Dad</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "As a first-time pet owner, I was nervous about grooming. The Pawfect Care team answered all my questions 
                and gave me great tips. Bella looks adorable and her coat has never been healthier!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Smile className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Emily R.</div>
                  <div className="text-sm text-muted-foreground">Bella's Mom</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-accent/10">
        <div className="container max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Pawfect Care grooming services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">How do I book a grooming appointment?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Booking is easy! Simply create a profile for your pet, choose your preferred service and time slot, 
                and select a Chewy-verified groomer near you. You'll receive instant confirmation and reminders 
                before your appointment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">Are all groomers certified and insured?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Yes! Every groomer in the Pawfect Care network is Chewy-verified, which means they've passed 
                background checks, hold proper certifications, and carry liability insurance. Your pet's safety 
                is our top priority.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">What if my pet has special needs or anxiety?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                We understand that every pet is unique. When creating your pet's profile, you can note any special 
                needs, behavioral concerns, or health conditions. Our groomers are trained to work with anxious pets 
                and will take extra time to ensure your pet feels comfortable and safe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">How long does a typical grooming session take?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Grooming time varies based on your pet's size, coat type, and the service selected. A basic bath 
                and brush typically takes 1-2 hours, while a full grooming session may take 2-3 hours. You'll 
                receive real-time updates throughout the appointment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">Can I request a specific groomer?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Absolutely! Once you've found a groomer your pet loves, you can save them as a favorite and book 
                directly with them for future appointments. Building a relationship with a trusted groomer helps 
                your pet feel more comfortable over time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">What's your cancellation policy?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                We understand that plans change. You can cancel or reschedule your appointment up to 24 hours 
                in advance without any fees. Cancellations made less than 24 hours before the appointment may 
                be subject to a cancellation fee.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Give Your Pet the Pawfect Care Experience?
            </h2>
            <p className="text-lg opacity-90">
              Join thousands of happy pet parents who trust Pawfect Care for professional grooming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full text-base px-8">
                Book Your First Appointment
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download the App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">Pawfect Care</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional pet grooming services backed by Chewy's commitment to quality and care.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <SiFacebook className="h-4 w-4 text-primary" />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <SiInstagram className="h-4 w-4 text-primary" />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <SiX className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Bath & Brush</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Full Grooming</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Spa Treatment</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nail Trimming</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Become a Partner</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>1-800-PAWFECT</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>hello@pawfectcare.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} Pawfect Care. All rights reserved.
            </div>
            <div className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                caffeine.ai
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
