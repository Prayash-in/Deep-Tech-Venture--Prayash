"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { DeepTechGlobe } from "@/components/deep-tech-globe";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-900 dark:selection:text-orange-200">

            {/* 1. Get in Touch (Hero) */}
            <section className="relative min-h-[60vh] flex flex-col justify-center px-6 py-24 sm:px-12 lg:px-24 pt-32">
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
                            Get in Touch
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-12"
                        >
                            Let's<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">
                                Connect.
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="max-w-xl text-xl md:text-2xl text-muted-foreground leading-relaxed font-light"
                        >
                            <p className="mb-6 border-l-2 border-orange-500/50 pl-6">
                                Whether you are a founder looking for an ecosystem, an investor seeking opportunities, or a researcher ready to solve complex problems—we are listening.
                            </p>
                        </motion.div>
                    </div>

                    {/* Animation - Hidden on mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex justify-center perspective-1000 mt-12 lg:mt-0"
                    >
                        <DeepTechGlobe className="scale-75" />
                    </motion.div>
                </div>
            </section>

            {/* 2. Contact Details & Form */}
            <section className="py-24 px-6 sm:px-12 lg:px-24 relative z-10 border-t border-border bg-muted/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-orange-600 font-bold text-xs tracking-[0.2em] uppercase block mb-8">Our Location</span>

                        <div className="space-y-8">
                            <div className="group bg-card p-8 border border-border hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Headquarters</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Somadhan Group Tower<br />
                                            Assam Skill University<br />
                                            Tezpur, Assam - 784125<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-card p-8 border border-border hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-orange-500 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Email Us</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            connect@somadhangroup.in<br />
                                            8812065523
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-orange-600 font-bold text-xs tracking-[0.2em] uppercase block mb-8">Send Message</span>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-background border border-border p-3 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-muted-foreground/50"
                                        placeholder="ENTER NAME"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-background border border-border p-3 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-muted-foreground/50"
                                        placeholder="ENTER EMAIL"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                                <select
                                    id="subject"
                                    required
                                    className="w-full bg-background border border-border p-3 focus:outline-none focus:border-orange-500 transition-colors text-muted-foreground"
                                >
                                    <option value="">Select Subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="investment">Investment</option>
                                    <option value="research">Research Collaboration</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    required
                                    className="w-full bg-background border border-border p-3 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-muted-foreground/50 resize-none"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)]"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
