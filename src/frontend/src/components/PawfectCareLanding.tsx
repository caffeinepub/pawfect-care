import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sparkles, Scissors, Bath, Heart, Star, CheckCircle2, Clock, Shield, Award, Smile, Phone, Mail } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import MobileInHandIcon from './icons/MobileInHandIcon';

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
                <img
                  src="/assets/uploaded/image-10.png"
                  alt="Happy groomed pet"
                  className="h-full w-full object-cover"
                  loading="eager"
                  width="600"
                  height="600"
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
                  <img
                    src="/assets/uploaded/image.png"
                    alt="Spa treatment for cats"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width="300"
                    height="300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/assets/uploaded/image-4.png"
                    alt="Happy pet after grooming"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width="300"
                    height="300"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/assets/uploaded/image-8.png"
                    alt="Professional bath service"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width="300"
                    height="300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/assets/uploaded/image-11.png"
                    alt="Pet grooming session"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width="300"
                    height="300"
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
                <img
                  src="/assets/uploaded/image-5.png"
                  alt="Pet enjoying outdoor time"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width="600"
                  height="450"
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

            <div className="text-center mt-8">
              <Button variant="link" className="text-primary">
                Learn more about our mobile experience →
              </Button>
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
              Tail-Wagging Grooming Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From basic baths to full spa treatments, we offer everything your furry friend needs to look and feel amazing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src="/assets/uploaded/image-13.png"
                  alt="Full grooming service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Scissors className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="rounded-full">Popular</Badge>
                </div>
                <CardTitle className="text-2xl">Full Grooming</CardTitle>
                <CardDescription className="text-base">
                  Complete grooming package including bath, haircut, nail trim, and ear cleaning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Professional haircut & styling</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Luxurious bath with premium products</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Nail trimming & paw care</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Ear cleaning & teeth brushing</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src="/assets/uploaded/image-11.png"
                  alt="Bath and brush service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Bath className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Bath & Brush</CardTitle>
                <CardDescription className="text-base">
                  Refreshing bath and thorough brushing to keep your pet clean and comfortable.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Gentle, thorough bathing</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>De-shedding treatment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Coat conditioning</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Blow-dry & brush out</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src="/assets/uploaded/image.png"
                  alt="Spa treatment service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="rounded-full">Premium</Badge>
                </div>
                <CardTitle className="text-2xl">Spa Treatment</CardTitle>
                <CardDescription className="text-base">
                  Ultimate pampering experience with specialized treatments for your beloved pet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Aromatherapy bath</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Deep conditioning treatment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Paw pad moisturizing</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Relaxing massage</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src="/assets/uploaded/image-3.png"
                  alt="Nail trimming service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Scissors className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Nail Trimming</CardTitle>
                <CardDescription className="text-base">
                  Professional nail care to keep your pet comfortable and prevent overgrowth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Safe, stress-free trimming</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Quick identification & care</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Paw pad inspection</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Filing & smoothing</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src="/assets/uploaded/image-2.png"
                  alt="Teeth cleaning service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Smile className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Teeth Cleaning</CardTitle>
                <CardDescription className="text-base">
                  Dental hygiene service to maintain your pet's oral health and fresh breath.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Gentle teeth brushing</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Plaque & tartar removal</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Gum health check</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Fresh breath treatment</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src="/assets/uploaded/image-1.png"
                  alt="Ear cleaning service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Ear Cleaning</CardTitle>
                <CardDescription className="text-base">
                  Gentle ear care to prevent infections and keep your pet comfortable.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Thorough ear inspection</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Gentle cleaning solution</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Debris removal</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Infection prevention</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/assets/uploaded/image-9.png"
                  alt="Membership benefits"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width="600"
                  height="375"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="rounded-full px-4 py-1.5">
                  Membership Plans
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Membership Plans Designed with Extra Care
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With optional membership plans, you enjoy exclusive benefits designed to make pet care easier and more affordable.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Unlimited wellness, sick, and urgent care exams</div>
                    <div className="text-muted-foreground text-sm">No exam fees for members</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Priority scheduling</div>
                    <div className="text-muted-foreground text-sm">Get care when your pet needs it most</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Exclusive member discounts</div>
                    <div className="text-muted-foreground text-sm">Save on grooming services and products</div>
                  </div>
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground italic">
                  Available in select locations. For more information, ask the care team at your Pawfect Care practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 bg-accent/20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How Pawfect Care Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting your pet groomed has never been easier. Just four simple steps to a happier, cleaner pet!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                icon: Clock,
                title: 'Book Online',
                description: 'Choose your service and pick a convenient time slot that works for you.',
              },
              {
                step: '02',
                icon: Heart,
                title: 'Drop Off',
                description: 'Bring your pet to our welcoming facility where our team greets them warmly.',
              },
              {
                step: '03',
                icon: Sparkles,
                title: 'We Pamper',
                description: 'Our expert groomers work their magic with care, patience, and lots of love.',
              },
              {
                step: '04',
                icon: Award,
                title: 'Pick Up Happy',
                description: 'Collect your freshly groomed, happy pet looking and feeling their absolute best!',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="text-center p-8 rounded-2xl border-2 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <div className="mt-4 mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="rounded-full px-8">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: 'Safe & Secure', description: 'Your pet\'s safety is our top priority' },
                  { icon: Award, title: 'Expert Groomers', description: 'Certified professionals with years of experience' },
                  { icon: Heart, title: 'Loving Care', description: 'We treat every pet like our own' },
                  { icon: Star, title: '5-Star Rated', description: 'Trusted by thousands of happy pet parents' },
                ].map((item, index) => (
                  <Card key={index} className="p-6 rounded-2xl border-2 hover:border-primary/50 transition-all duration-300">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                The Pawfect Choice for Your Pet
              </h2>
              <p className="text-lg text-muted-foreground">
                We're not just groomers—we're pet lovers dedicated to making every grooming experience 
                positive, stress-free, and enjoyable for your furry family members.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Premium Products</div>
                    <div className="text-muted-foreground text-sm">We use only the finest, pet-safe grooming products</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Stress-Free Environment</div>
                    <div className="text-muted-foreground text-sm">Calm, comfortable spaces designed for anxious pets</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Flexible Scheduling</div>
                    <div className="text-muted-foreground text-sm">Convenient appointment times that fit your busy life</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 bg-accent/20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Pet Parents Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it—hear from our happy customers!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                name: 'Sarah M.',
                pet: 'Golden Retriever',
                rating: 5,
                text: 'Absolutely amazing service! My dog Max always comes home looking and smelling fantastic. The staff is so caring and professional.',
              },
              {
                name: 'James T.',
                pet: 'Persian Cat',
                rating: 5,
                text: 'My cat Luna is usually very anxious, but the groomers here are so gentle and patient. She actually seems to enjoy her spa days now!',
              },
              {
                name: 'Emily R.',
                pet: 'Poodle Mix',
                rating: 5,
                text: 'Best grooming experience ever! They really take their time and pay attention to every detail. Highly recommend Pawfect Care!',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 rounded-2xl border-2 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.pet} Parent</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              Gallery
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Happy Pets, Happy Hearts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the joy and transformation we bring to pets every day
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '/assets/uploaded/image-6.png',
              '/assets/uploaded/image-7.png',
              '/assets/uploaded/image-12.png',
              '/assets/uploaded/image-14.png',
            ].map((src, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={src}
                  alt={`Happy groomed pet ${index + 1}`}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
            ))}
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
              Pawfect Care Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers! Find everything you need to know about our grooming services.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">What is Pawfect Care?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Pawfect Care is a premium pet grooming service backed by Chewy. We partner with almost 100 Chewy-verified 
                professional groomers to provide top-quality grooming services for your beloved pets. Our services include 
                full grooming, baths, spa treatments, nail trimming, teeth cleaning, and more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">Can I walk in without scheduling an appointment?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                While we recommend booking an appointment to ensure availability, we do accept walk-ins based on groomer 
                availability. However, scheduled appointments receive priority service and guaranteed time slots.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">What should I bring to my pet's grooming appointment?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Please bring your pet's vaccination records (especially rabies), any special grooming instructions or 
                preferences, and information about any skin sensitivities or health conditions. If your pet has a favorite 
                toy or blanket, feel free to bring that too for comfort!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">Do you groom all coat types and breeds?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Yes! Our Chewy-verified groomers are trained to work with all coat types, from short-haired to long-haired, 
                curly, wiry, and double-coated breeds. We also groom both dogs and cats of all sizes and temperaments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">Can I add nail trimming or teeth cleaning to my grooming package?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Absolutely! Nail trimming and teeth cleaning can be added to any grooming package. We also offer these 
                services as standalone appointments if your pet just needs a quick nail trim or dental care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">What if my pet is anxious or nervous about grooming?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                We specialize in working with anxious pets! Our groomers use gentle, patient techniques and create a calm 
                environment. We take breaks as needed and never rush the process. Let us know about your pet's anxiety when 
                booking, and we'll take extra care to make them comfortable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">How long does a typical grooming appointment take?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Grooming time varies based on your pet's size, coat type, and the services requested. A basic bath and brush 
                typically takes 1-2 hours, while a full grooming with haircut can take 2-4 hours. We'll provide an estimated 
                time when you book your appointment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">Do you offer membership plans?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Yes! We offer optional membership plans with benefits like priority scheduling, exclusive discounts, and 
                unlimited wellness exams. Membership availability varies by location. Ask our care team for more details 
                about plans available at your local Pawfect Care practice.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">We look forward to seeing you soon.</p>
            <Button size="lg" className="rounded-full px-8">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Need help?
                </h2>
                <p className="text-primary-foreground/90 text-lg">
                  We're here for you 24/7.
                </p>
                <div className="space-y-4">
                  <a href="tel:1-877-372-4399" className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors group">
                    <div className="h-12 w-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-75">Call us</div>
                      <div className="font-semibold text-lg">1-877-372-4399</div>
                    </div>
                  </a>
                  <a href="mailto:careteam@pawfectcare.com" className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors group">
                    <div className="h-12 w-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-75">Email us</div>
                      <div className="font-semibold text-lg">careteam@pawfectcare.com</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-primary-foreground/10 rounded-full" />
                  <div className="absolute inset-8 bg-primary-foreground/10 rounded-full" />
                  <div className="absolute inset-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <Heart className="h-16 w-16 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Pawfect Care</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional pet grooming services that make tails wag and whiskers twitch with joy.
              </p>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <SiFacebook className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <SiInstagram className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <SiX className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Full Grooming</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Bath & Brush</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Spa Treatment</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Nail Trimming</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Teeth Cleaning</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>1-877-372-4399</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>careteam@pawfectcare.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Mon-Sat: 8am-6pm<br />Sun: 10am-4pm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Pawfect Care. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
