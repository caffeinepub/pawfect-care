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
                  src={publicAssetUrl('assets/uploaded/image-10.png')}
                  alt="Happy groomed pet"
                  className="h-full w-full object-cover"
                  loading="eager"
                  width={600}
                  height={600}
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
                    src={publicAssetUrl('assets/uploaded/image.png')}
                    alt="Spa treatment for cats"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <SafeImage
                    src={publicAssetUrl('assets/uploaded/image-4.png')}
                    alt="Happy pet after grooming"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <SafeImage
                    src={publicAssetUrl('assets/uploaded/image-8.png')}
                    alt="Professional bath service"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <SafeImage
                    src={publicAssetUrl('assets/uploaded/image-11.png')}
                    alt="Pet grooming session"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={300}
                    height={300}
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
                  src={publicAssetUrl('assets/uploaded/image-5.png')}
                  alt="Pet enjoying outdoor time"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={600}
                  height={450}
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
                <SafeImage
                  src={publicAssetUrl('assets/uploaded/image-13.png')}
                  alt="Full grooming service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={225}
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
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Professional haircut & styling</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Luxury bath with premium products</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Nail trimming & paw care</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Ear cleaning & teeth brushing</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <SafeImage
                  src={publicAssetUrl('assets/uploaded/image-14.png')}
                  alt="Bath and brush service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={225}
                />
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Bath className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Bath & Brush</CardTitle>
                <CardDescription className="text-base">
                  Keep your pet fresh and clean with our signature bath service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Gentle, thorough bathing</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Blow-dry & brush out</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>De-shedding treatment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Cologne spritz</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" variant="outline">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <SafeImage
                  src={publicAssetUrl('assets/uploaded/image-15.png')}
                  alt="Nail trimming service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={225}
                />
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Scissors className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Nail Trimming</CardTitle>
                <CardDescription className="text-base">
                  Quick and stress-free nail care for your pet's comfort.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Professional nail trimming</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Paw pad care</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Quick & gentle process</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Stress-free experience</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" variant="outline">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <SafeImage
                  src={publicAssetUrl('assets/uploaded/image-16.png')}
                  alt="Teeth cleaning service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={225}
                />
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Smile className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Teeth Cleaning</CardTitle>
                <CardDescription className="text-base">
                  Maintain your pet's dental health with professional teeth cleaning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Gentle teeth brushing</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Plaque & tartar removal</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Fresh breath treatment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Dental health check</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" variant="outline">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <SafeImage
                  src={publicAssetUrl('assets/uploaded/image-18.png')}
                  alt="Spa treatment service"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={225}
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
                  Ultimate pampering experience with luxury spa services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Aromatherapy bath</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Deep conditioning treatment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Paw & nose balm</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Relaxing massage</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <SafeImage
                  src={publicAssetUrl('assets/uploaded/image-17.png')}
                  alt="Specialty services"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={225}
                />
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Specialty Services</CardTitle>
                <CardDescription className="text-base">
                  Custom grooming solutions for unique needs and breeds.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Breed-specific styling</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Senior pet care</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Sensitive skin treatments</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Creative grooming</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full" variant="outline">Book Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting your pet groomed has never been easier. Just three simple steps to a happier, healthier pet.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="relative">
              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold">Book Online</h3>
                <p className="text-muted-foreground">
                  Choose your service, select a time that works for you, and book instantly through our app or website.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
            </div>

            <div className="relative">
              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold">Drop Off Your Pet</h3>
                <p className="text-muted-foreground">
                  Bring your furry friend to our location at your scheduled time. Our team will greet you with a smile.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
            </div>

            <div className="relative">
              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold">Pick Up Happy Pet</h3>
                <p className="text-muted-foreground">
                  Receive updates during grooming, then pick up your freshly groomed, tail-wagging companion!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="rounded-full px-8">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28 bg-accent/10">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Pet Parents Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it—hear from the humans (and pets!) who love Pawfect Care.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6 rounded-2xl border-2">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-muted-foreground mb-4">
                "Absolutely amazing! My golden retriever Max always comes home looking and smelling fantastic. 
                The groomers are so gentle and caring. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">SJ</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Max's Mom</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-muted-foreground mb-4">
                "I was nervous about taking my anxious cat Luna for grooming, but the team was incredibly patient. 
                She actually seemed relaxed when I picked her up!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">MC</span>
                </div>
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">Luna's Dad</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-muted-foreground mb-4">
                "Best grooming service we've ever used! The online booking is so convenient, and they send photos 
                during the appointment. Bella looks like a princess every time!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">ER</span>
                </div>
                <div>
                  <div className="font-semibold">Emily Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Bella's Mom</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
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
              See the joy and transformation we bring to pets every day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'image-1.png', alt: 'Groomed dog smiling' },
              { src: 'image-2.png', alt: 'Cat after spa treatment' },
              { src: 'image-3.png', alt: 'Happy puppy post-grooming' },
              { src: 'image-6.png', alt: 'Fluffy dog after bath' },
              { src: 'image-7.png', alt: 'Cat enjoying grooming' },
              { src: 'image-9.png', alt: 'Dog with fresh haircut' },
              { src: 'image-12.png', alt: 'Pet grooming in progress' },
              { src: 'image-14.png', alt: 'Happy groomed pet' },
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-2xl shadow-lg group">
                <SafeImage
                  src={publicAssetUrl(`assets/uploaded/${image.src}`)}
                  alt={image.alt}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-accent/10">
        <div className="container max-w-3xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our grooming services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">How long does a grooming appointment take?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Most grooming appointments take 2-3 hours depending on your pet's size, coat condition, and the services 
                selected. We'll give you an estimated time when you book, and we'll send you updates throughout the appointment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">What should I bring to the appointment?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Just bring your pet! We provide all grooming supplies, including premium shampoos and conditioners. 
                If your pet has any special products you'd like us to use, feel free to bring them along.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">Do you groom cats as well as dogs?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Yes! We specialize in grooming both cats and dogs. Our groomers are trained in feline-specific handling 
                techniques to ensure a stress-free experience for your cat.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">What if my pet has special needs or anxiety?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                We're experienced in working with anxious pets and those with special needs. Please let us know about 
                any concerns when booking, and we'll take extra time and care to ensure your pet feels safe and comfortable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">How often should I have my pet groomed?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                It depends on your pet's breed, coat type, and lifestyle. Generally, dogs benefit from grooming every 4-8 weeks, 
                while cats may need grooming every 6-12 weeks. We'll provide personalized recommendations based on your pet's needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background rounded-2xl border-2 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">What is your cancellation policy?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                We understand that plans change! You can cancel or reschedule your appointment up to 24 hours in advance 
                without any fees. Cancellations within 24 hours may be subject to a small fee.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need Help?
            </h2>
            <p className="text-lg opacity-90">
              Our friendly team is here to answer any questions and help you book the perfect grooming appointment for your pet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="rounded-full gap-2">
                <Phone className="h-5 w-5" />
                Call Us: 1-800-PET-CARE
              </Button>
              <Button size="lg" variant="outline" className="rounded-full gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">Pawfect Care</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional pet grooming services that make tails wag and whiskers twitch with joy.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiX className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Full Grooming</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Bath & Brush</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Nail Trimming</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Teeth Cleaning</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Spa Treatment</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Pawfect Care. All rights reserved.</p>
            <p>
              Built with <Heart className="inline h-4 w-4 text-red-500 fill-current" /> using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
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
