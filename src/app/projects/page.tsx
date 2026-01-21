"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground flex flex-col items-center justify-center relative overflow-hidden selection:bg-orange-500/30 selection:text-orange-900 dark:selection:text-orange-200">

            {/* Background Glow already provided by Layout */}

            <div className="relative z-10 flex flex-col items-center text-center px-6">

                {/* Animated Icon */}
                <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-orange-500/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-2 border-2 border-dashed border-orange-500/40 rounded-full animate-spin-reverse-slow"></div>
                    <motion.div
                        initial={{ opacity: 0.5, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                    >
                        <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">System Status</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Loading...</span>
                    </h1>
                    <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                        We are currently compiling our portfolio of deep-tech ventures. The sequence will be initialized shortly.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
