"use client";

import { motion } from "framer-motion";
import { Dna, Sprout, Wifi, Atom } from "lucide-react";

export function DeepTechGenesis({ className = "" }: { className?: string }) {
    return (
        <div className={`relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] flex items-center justify-center z-10 ${className}`}>

            {/* Central Core - The Genesis Spark */}
            <div className="absolute w-12 h-12 bg-orange-500 rounded-full blur-[20px] animate-pulse"></div>
            <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.6)]">
                <div className="w-12 h-12 bg-black/40 rounded-full blur-[1px] flex items-center justify-center">
                    <Atom className="text-white/90 w-8 h-8 animate-spin-slow" />
                </div>
            </div>

            {/* Ring 1 - Soil (Sprout) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-[140px] h-[140px] border border-emerald-500/30 rounded-full border-dashed"
            >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background p-1 border border-emerald-500/50 rounded-full text-emerald-500">
                    <Sprout size={16} />
                </div>
            </motion.div>

            {/* Ring 2 - Cell (DNA) */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-[200px] h-[200px] border border-orange-500/30 rounded-full border-dashed"
            >
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-background p-1 border border-orange-500/50 rounded-full text-orange-500">
                    <Dna size={16} />
                </div>
            </motion.div>

            {/* Ring 3 - Sensor (Wifi/Tech) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[260px] h-[260px] border border-blue-500/30 rounded-full border-dashed"
            >
                <div className="absolute bottom-4 left-4 bg-background p-1 border border-blue-500/50 rounded-full text-blue-500">
                    <Wifi size={16} />
                </div>
            </motion.div>

            {/* Connecting Lines / Network */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="absolute w-[280px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent rotate-45"></div>
                <div className="absolute w-[280px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent -rotate-45"></div>
            </motion.div>

        </div>
    );
}
