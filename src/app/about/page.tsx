"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Globe, Cpu } from "lucide-react";
import { DeepTechGenesis } from "@/components/deep-tech-genesis";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-900 dark:selection:text-orange-200">

            {/* 1. Our Genesis (Hero) */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 py-24 sm:px-12 lg:px-24 pt-32">

                <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-8"
                        >
                            <span className="w-12 h-[1px] bg-orange-500"></span>
                            Our Genesis
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-12"
                        >
                            The Engine Behind<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">
                                Systemic Evolution.
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="max-w-xl text-xl md:text-2xl text-muted-foreground leading-relaxed font-light"
                        >
                            <p className="mb-6 border-l-2 border-orange-500/50 pl-6">
                                Somadhan Group is not just a company. We are a deep-tech venture studio architecting the "One Health" ecosystem—unifying soil, cell, and sensor into a single computational framework.
                            </p>
                        </motion.div>
                    </div>

                    {/* Animation - Hidden on mobile, visible on lg screens */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex justify-center mt-12 lg:mt-0"
                    >
                        <DeepTechGenesis />
                    </motion.div>
                </div>
            </section>

            {/* 2. Our Philosophy */}
            <section className="py-24 px-6 sm:px-12 lg:px-24 relative z-10 border-y border-border bg-muted/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <span className="text-orange-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Core Principles</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Philosophy</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
                        {[
                            {
                                icon: Globe,
                                title: "Convergence",
                                description: "We combine biology, physics, and computing. By bringing these fields together, we see solutions that others miss."
                            },
                            {
                                icon: Brain,
                                title: "Intelligence",
                                description: "We use advanced learning systems—both biological and digital—to solve massive global challenges."
                            },
                            {
                                icon: Cpu,
                                title: "Architecture",
                                description: "We don't just build products; we build ecosystems. Everything we create works together to make a bigger impact."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group bg-card p-12 hover:bg-muted/50 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-[2px] h-0 bg-orange-600 group-hover:h-full transition-all duration-700 ease-in-out"></div>
                                <item.icon className="w-10 h-10 mb-8 text-muted-foreground group-hover:text-orange-600 transition-colors duration-500 transform group-hover:scale-110 origin-left" />
                                <h3 className="text-xl font-bold mb-4 group-hover:text-foreground transition-colors">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. A Message from Leadership */}
            <section className="py-32 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-6xl text-orange-500/20 font-serif mb-6">"</span>
                            <p className="text-3xl md:text-5xl font-light leading-tight text-foreground/90 italic tracking-wide">
                                We are building the operating system for a resilient future. Our mandate is not just to innovate, but to <span className="text-orange-500 font-normal">evolve</span> the very fabric of how humanity interacts with the biosphere.
                            </p>
                            <div className="mt-12 flex flex-col items-center">
                                <div className="w-16 h-[1px] bg-orange-500/50 mb-6"></div>
                                <h4 className="text-lg font-bold tracking-widest uppercase">Leadership Team</h4>
                                <p className="text-xs text-muted-foreground mt-2 tracking-[0.2em] uppercase">Somadhan Group</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-32 px-6 sm:px-12 lg:px-24 relative overflow-hidden flex flex-col items-center text-center border-t border-border bg-background">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10">
                        Ready to Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Future?</span>
                    </h2>
                    <Link
                        href="/contact"
                        className="group px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 inline-flex items-center gap-3 rounded-sm shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:shadow-[0_0_50px_rgba(234,88,12,0.8)]"
                    >
                        Join the Ecosystem
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
