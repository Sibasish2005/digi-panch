import React from 'react';
import Navbar from '../(landing-page)/navbar';
import Footer from '../(landing-page)/footer';
import { 
  Eye, 
  Globe, 
  Zap, 
  FileText, 
  Baby, 
  BookHeart, 
  ClipboardEdit, 
  Search, 
  Download, 
  IndianRupee, 
  Clock, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="grow bg-background text-foreground">
        
        {/* Section 1 - Hero / Intro */}
        <section className="py-20 px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary to-orange-500">
            About Digi-Panch
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
            Bridging citizens and governance, one village at a time.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
            We are dedicated to bringing essential government services directly to our citizens' fingertips. By leveraging modern technology, our platform eliminates the hurdles of complex bureaucratic processes, ensuring a highly accessible, totally transparent, and fundamentally fair governance ecosystem for all.
          </p>
        </section>

        {/* Section 2 - Our Mission */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 max-w-4xl mx-auto leading-relaxed">
              We believe every citizen deserves fast, transparent, and dignified access to government services.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/50 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Transparent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">Real-time status tracking and full visibility into every step of your application processing.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/50 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Accessible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">Services available online 24/7, removing the need for physical visits and long queues.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/50 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Efficient</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">Streamlined digital workflows ensure rapid processing and immediate delivery of documents.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3 - What We Offer */}
        <section className="py-24 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground font-medium flex items-center justify-center gap-3">
              <span>All free of cost</span> 
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> 
              <span>100% online</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden border-orange-500/20 hover:border-orange-500/60 shadow-md">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent -z-10 group-hover:from-orange-500/10 transition-colors"></div>
              <CardHeader>
                <FileText className="w-10 h-10 text-orange-500 mb-2" />
                <CardTitle>Income Certificate</CardTitle>
                <CardDescription>Proof of annual household income</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 border rounded-lg px-4 py-3 mt-4 inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-semibold text-foreground">3–5 days processing</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-blue-500/20 hover:border-blue-500/60 shadow-md">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent -z-10 group-hover:from-blue-500/10 transition-colors"></div>
              <CardHeader>
                <Baby className="w-10 h-10 text-blue-500 mb-2" />
                <CardTitle>Birth Certificate</CardTitle>
                <CardDescription>Official record of birth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 border rounded-lg px-4 py-3 mt-4 inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-foreground">5–7 days processing</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-purple-500/20 hover:border-purple-500/60 shadow-md">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent -z-10 group-hover:from-purple-500/10 transition-colors"></div>
              <CardHeader>
                <BookHeart className="w-10 h-10 text-purple-500 mb-2" />
                <CardTitle>Death Certificate</CardTitle>
                <CardDescription>Official record of death</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 border rounded-lg px-4 py-3 mt-4 inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-semibold text-foreground">5–7 days processing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4 - How It Works */}
        <section className="py-24 px-4 bg-muted/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -z-10"></div>
          
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-20">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4 relative">
              {/* Connecting Line (Desktop Only) */}
              <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-primary/30 -z-0"></div>
              
              <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 group">
                <div className="w-24 h-24 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center shadow-lg text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  <ClipboardEdit className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Fill out the application form</h3>
                <p className="text-muted-foreground w-3/4 mx-auto">Submit your desired certificate details securely online via our digital form.</p>
              </div>

              <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 group">
                <div className="w-24 h-24 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center shadow-lg text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Track your application status</h3>
                <p className="text-muted-foreground w-3/4 mx-auto">Monitor real-time progress using your unique application ID.</p>
              </div>

              <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 group">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center shadow-lg text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  <Download className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Download your certificate</h3>
                <p className="text-muted-foreground w-3/4 mx-auto">Instantly download and print verified documents once fully approved.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Why Digi-Panch */}
        <section className="py-24 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Digi-Panch?</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-background to-muted/30 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-5 rounded-full bg-green-500/10 text-green-500 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <IndianRupee className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Free of Cost</h3>
              <p className="text-xs text-muted-foreground mt-2">Zero hidden fees charges</p>
            </div>
            
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-background to-muted/30 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-5 rounded-full bg-orange-500/10 text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Fast Processing</h3>
              <p className="text-xs text-muted-foreground mt-2">Days, not weeks</p>
            </div>

            <div className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-background to-muted/30 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-5 rounded-full bg-blue-500/10 text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">No Queue</h3>
              <p className="text-xs text-muted-foreground mt-2">Save time and energy</p>
            </div>

            <div className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-background to-muted/30 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="p-5 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Secure & Verified</h3>
              <p className="text-xs text-muted-foreground mt-2">Digitally signed docs</p>
            </div>
          </div>
        </section>

        {/* Section 6 - CTA */}
        <section className="py-24 px-4 text-center border-t border-border relative overflow-hidden">
           <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-background to-orange-500/5 -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 max-w-3xl mx-auto">
            Which certificate do you need?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
            <Button size="lg" className="w-full sm:w-auto text-md px-8 py-6 h-auto shadow-md hover:shadow-lg transition-all" variant="default" asChild>
              <Link href="/services">Income Certificate</Link>
            </Button>
            <Button size="lg" className="w-full sm:w-auto text-md px-8 py-6 h-auto shadow-md hover:shadow-lg transition-all border-blue-500/20 text-blue-500 hover:text-blue-500" variant="outline" asChild>
              <Link href="/services">Birth Certificate</Link>
            </Button>
            <Button size="lg" className="w-full sm:w-auto text-md px-8 py-6 h-auto shadow-md hover:shadow-lg transition-all border-purple-500/20 text-purple-500 hover:text-purple-500" variant="outline" asChild>
              <Link href="/services">Death Certificate</Link>
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
