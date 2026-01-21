'use client';

import React from 'react';
import Image from 'next/image';
import {
  Sprout,
  Dna,
  Cpu,
  ArrowRight,
  Layers,
  Activity,
  Globe,
  Building2,
  Landmark,
  FlaskConical,
  Network,
  Hexagon
} from 'lucide-react';
import { DeepTechViz } from "@/components/deep-tech-viz";

const Page = () => {
  /* Removed unused scroll listener for now */

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-foreground font-sans selection:bg-orange-500/30 selection:text-orange-900 dark:selection:text-orange-200 overflow-x-hidden flex flex-col transition-colors duration-500">

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex flex-col pt-12 pb-20">

        {/* TOP BRANDING - Perfectly Centered & Spaced */}
        <div className="w-full max-w-7xl mx-auto px-6 mb-16 lg:mb-0 flex flex-col items-center justify-center relative z-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[0.25em] uppercase cursor-default text-center animate-fade-in-up drop-shadow-sm flex items-center justify-center gap-6">
            <Image
              src="/Logo.png"
              alt="Somadhan Group Logo"
              width={100}
              height={100}
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
            <div className="flex flex-col md:flex-row md:items-center">
              <span className="text-foreground transition-colors duration-500">Somadhan</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-orange-700 md:ml-4">
                Group
              </span>
            </div>
          </h2>
          <div className="relative w-64 sm:w-80 md:w-full md:max-w-2xl h-[2px] mt-8 animate-fade-in-up opacity-80">
            {/* The Line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

            {/* Moving Spheres */}
            <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-600 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-patrol"></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-600 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-patrol-delayed"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content: Intro - Precise Typography */}
          <div className="space-y-10 animate-fade-in-up order-2 lg:order-1 relative">

            {/* Decor Line */}
            <div className="absolute -left-6 top-2 bottom-2 w-[1px] bg-gradient-to-b from-orange-500/50 to-transparent hidden lg:block"></div>

            <div className="inline-flex items-center gap-3 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-12 h-[1px] bg-orange-500"></span>
              We are Somadhan Group
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] text-foreground tracking-tight transition-colors duration-500">
              Intelligence, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">
                Evolved.
              </span>
            </h1>

            {/* Intro Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-light leading-relaxed tracking-wide transition-colors duration-500">
              Somadhan Group is building the smart infrastructure of tomorrow—where biological complexity meets advanced technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <button
                onClick={() => scrollToSection('expertise')}
                className="group px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-3 rounded-sm shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:shadow-[0_0_50px_rgba(234,88,12,0.8)] cursor-pointer"
              >
                Explore
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('vision')}
                className="px-10 py-4 bg-transparent border border-border hover:border-orange-500/50 text-foreground text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-sm hover:bg-muted cursor-pointer text-center"
              >
                Our Vision
              </button>
            </div>
          </div>

          {/* Right Content: Futuristic Animated Model */}
          <div className="relative h-[600px] w-full flex flex-col items-center justify-center order-1 lg:order-2 perspective-1000">
            <DeepTechViz />
          </div>
        </div>
      </section>

      {/* Vision / Minimal Metrics */}
      <section id="vision" className="py-24 border-y border-border bg-muted/30 relative z-10 backdrop-blur-sm overflow-hidden transition-colors duration-500">
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-6 md:p-10 text-center md:text-left hover:bg-card transition-all duration-500 group hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] rounded-sm">
              <span className="block text-4xl md:text-5xl font-thin text-foreground mb-3 group-hover:text-orange-500 transition-colors">2047</span>
              <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors tracking-widest uppercase">Target Vision</span>
              <p className="mt-4 md:mt-6 text-sm text-muted-foreground leading-relaxed w-full md:max-w-xs transition-colors mx-auto md:mx-0">Aligning with the national goal of a developed, self-reliant future through indigenous deep-tech.</p>
            </div>
            <div className="p-6 md:p-10 text-center md:text-left hover:bg-card transition-all duration-500 group hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] rounded-sm">
              <span className="block text-4xl md:text-5xl font-thin text-foreground mb-3 group-hover:text-orange-500 transition-colors">360°</span>
              <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors tracking-widest uppercase">Holistic Approach</span>
              <p className="mt-4 md:mt-6 text-sm text-muted-foreground leading-relaxed w-full md:max-w-xs transition-colors mx-auto md:mx-0">From soil sensors to satellite diagnostics, we cover the entire spectrum of life sciences.</p>
            </div>
            <div className="p-6 md:p-10 text-center md:text-left hover:bg-card transition-all duration-500 group hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] rounded-sm">
              <span className="block text-4xl md:text-5xl font-thin text-foreground mb-3 group-hover:text-orange-500 transition-colors">Zero</span>
              <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors tracking-widest uppercase">Latency Impact</span>
              <p className="mt-4 md:mt-6 text-sm text-muted-foreground leading-relaxed w-full md:max-w-xs transition-colors mx-auto md:mx-0">Developing Edge AI solutions that bring instant intelligence to the remotest corners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise (Clean Grid) */}
      <section id="expertise" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-8 transition-colors duration-500">
            <div>
              <span className="text-orange-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Core Competencies</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground transition-colors duration-500">Innovation Verticals</h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed text-left transition-colors duration-500">
              We build the engines that power the next generation of industry leaders, creating a seamless ecosystem of innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border shadow-[0_0_60px_rgba(249,115,22,0.05)] transition-colors duration-500">
            <MinimalCard
              icon={<Sprout size={28} />}
              title="Smart Agriculture"
              desc="Precision farming algorithms and soil health optimization."
            />
            <MinimalCard
              icon={<Activity size={28} />}
              title="Future Healthcare"
              desc="Early warning systems for disease outbreaks using population data."
            />
            <MinimalCard
              icon={<Dna size={28} />}
              title="Biotechnology"
              desc="Accelerating research for drug discovery and genetic analysis."
            />
            <MinimalCard
              icon={<Cpu size={28} />}
              title="Advanced Computing"
              desc="Next-generation algorithms for complex problem solving."
            />
            <MinimalCard
              icon={<Globe size={28} />}
              title="Supply Chain"
              desc="Blockchain-verified traceability from farm to consumer."
            />
            <MinimalCard
              icon={<Layers size={28} />}
              title="Unification"
              desc="Connecting all our technologies into one collaborative ecosystem."
            />
          </div>
        </div>
      </section>

      {/* Partners (Monochrome) */}
      <section id="partners" className="py-32 bg-background border-t border-border relative z-10 overflow-hidden transition-colors duration-500">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-6 tracking-wide transition-colors">Strategic Alliances</h2>
            <div className="w-16 h-[2px] bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-60 hover:opacity-100 transition-opacity duration-700 text-foreground">
            <PartnerTile icon={<Landmark size={32} />} label="Government" />
            <PartnerTile icon={<Building2 size={32} />} label="Enterprise" />
            <PartnerTile icon={<FlaskConical size={32} />} label="Research" />
            <PartnerTile icon={<Network size={32} />} label="Startups" />
          </div>
        </div>
      </section>

      {/* One-Line Minimal Footer */}

    </div>
  );
};

// Sub-components

const MinimalCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="group bg-card p-12 hover:bg-muted/50 transition-all duration-500 relative overflow-hidden hover:shadow-[inset_0_0_60px_rgba(249,115,22,0.05)]">
    <div className="absolute top-0 left-0 w-[2px] h-0 bg-orange-600 group-hover:h-full transition-all duration-700 ease-in-out"></div>
    <div className="text-muted-foreground group-hover:text-orange-600 transition-colors duration-500 mb-8 transform group-hover:scale-110 origin-left">{icon}</div>
    <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight transition-colors duration-500">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">{desc}</p>
  </div>
);

const PartnerTile = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center gap-6 group cursor-default relative">
    <div className="absolute inset-0 bg-orange-500/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
    <div className="p-6 rounded-full border border-border text-muted-foreground group-hover:text-orange-600 group-hover:border-orange-500/30 group-hover:bg-orange-500/5 transition-all duration-500 relative z-10 shadow-[0_0_0_rgba(249,115,22,0)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]">
      {icon}
    </div>
    <span className="text-xs font-bold text-muted-foreground tracking-[0.2em] uppercase group-hover:text-orange-600 transition-colors duration-500">{label}</span>
  </div>
);

export default Page;
