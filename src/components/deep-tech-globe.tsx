"use client";

import { motion } from "framer-motion";
import { Globe, Scan, MapPin } from "lucide-react";

export function DeepTechGlobe({ className = "" }: { className?: string }) {
    return (
        <div className={`relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] flex items-center justify-center z-10 ${className}`}>

            {/* Base Glow */}
            <div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-full"></div>

            {/* Rotating Orbital Rings - 3D Atom Effect */}
            <motion.div
                animate={{ rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border border-orange-500/20 rounded-full border-dashed"
            ></motion.div>



            <motion.div
                animate={{ rotateZ: 360, rotateY: 60 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-[80%] h-[80%] border border-amber-500/30 rounded-full border-dashed"
                style={{ transformStyle: "preserve-3d" }}
            ></motion.div>

            {/* Central Holographic Globe */}
            <div className="relative w-32 h-32 bg-orange-950/20 backdrop-blur-sm rounded-full border border-orange-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.4)] overflow-hidden">

                {/* Grid Overlay inside Sphere */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px)] bg-[size:10px_10px] opacity-50"></div>

                {/* Spinning Icon */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    <Globe className="w-20 h-20 text-orange-500/80" strokeWidth={0.5} />
                </motion.div>


            </div>

            {/* Floating GPS Markers */}
            <motion.div
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-10 flex items-center gap-2 bg-card/80 border border-orange-500/30 p-2 rounded-sm backdrop-blur-md"
            >
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-[10px] text-orange-200 font-mono">LOC_LOCKED</span>
            </motion.div>



        </div>
    );
}
