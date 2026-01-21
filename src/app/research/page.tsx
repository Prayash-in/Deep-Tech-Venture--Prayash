"use client";

import { motion } from "framer-motion";
import { Database, Binary } from "lucide-react";

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground flex flex-col items-center justify-center relative overflow-hidden selection:bg-orange-500/30 selection:text-orange-900 dark:selection:text-orange-200">

            {/* Background Glow already provided by Layout */}

            <div className="relative z-10 flex flex-col items-center text-center px-6">

                {/* Animated Icon - Different Hex Style for Research */}
                <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-orange-500/20 rotate-45"
                    ></motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-3 border border-orange-500/30 rotate-12"
                    ></motion.div>

                    <motion.div
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                    >
                        <Binary className="w-10 h-10" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Data Synthesis</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">InProgress</span>
                    </h1>
                    <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                        Our labs are processing new data streams. Comprehensive research papers and findings will be published soon.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
