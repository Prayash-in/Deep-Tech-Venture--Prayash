import { Hexagon, Dna, Cpu } from "lucide-react";

export function DeepTechViz({ className = "" }: { className?: string }) {
    return (
        <div className={`relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] flex items-center justify-center z-10 ${className}`}>

            {/* Outer Ring - Clean Line */}
            <div className="absolute w-full h-full rounded-full border border-orange-500/10 animate-spin-slow"></div>

            {/* Dashed Middle Ring - Technical Detail */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-border animate-spin-reverse-slow"></div>

            {/* Inner Pulse Ring - Subtle Energy */}
            <div className="absolute w-[60%] h-[60%] rounded-full border border-orange-500/30 animate-pulse"></div>

            {/* Orbiting Dot 1 (Outer) */}
            <div className="absolute w-full h-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-600 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>
            </div>

            {/* Orbiting Dot 2 (Middle) */}
            <div className="absolute w-[80%] h-[80%] animate-spin-reverse-slow">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>

            {/* Orbiting Dot 3 (Inner) */}
            <div className="absolute w-[60%] h-[60%] animate-spin-medium">
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
            </div>

            {/* Central Core - The Only Strong Glow */}
            <div className="relative z-10 w-32 h-32 bg-card border border-orange-500/50 flex items-center justify-center shadow-[0_0_120px_rgba(249,115,22,0.6)] group transition-all duration-500 hover:shadow-[0_0_150px_rgba(249,115,22,0.9)]">
                <div className="absolute inset-0 border border-orange-500/20 scale-90 group-hover:scale-100 transition-transform duration-700"></div>
                <div className="absolute inset-0 border border-orange-500/20 scale-110 group-hover:scale-100 transition-transform duration-700"></div>

                <Hexagon size={64} className="text-orange-500 animate-pulse-slow drop-shadow-[0_0_20px_rgba(249,115,22,1)]" strokeWidth={1} />

                {/* Floating Data Points - Tech Aesthetics */}
                <div className="absolute -top-16 -right-16 p-4 bg-card/90 border border-border flex items-center gap-3 animate-float-delay-1 shadow-xl backdrop-blur-sm transition-colors duration-500">
                    <Dna size={16} className="text-orange-500" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground font-mono leading-none mb-1">DATA_STREAM</span>
                        <span className="text-xs text-foreground font-bold tracking-wider">BIO_SEQ</span>
                    </div>
                </div>
                <div className="absolute -bottom-12 -left-12 p-4 bg-card/90 border border-border flex items-center gap-3 animate-float-delay-2 shadow-xl backdrop-blur-sm transition-colors duration-500">
                    <Cpu size={16} className="text-amber-500" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground font-mono leading-none mb-1">PROCESSOR</span>
                        <span className="text-xs text-foreground font-bold tracking-wider">Q_CORE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
