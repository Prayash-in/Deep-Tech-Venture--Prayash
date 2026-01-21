import React from 'react';

export function BackgroundGlow() {
    return (
        <>
            {/* Background Subtle Noise/Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #404040 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Top Cinematic Horizon Glow */}
            <div className="fixed top-16 left-0 w-full h-[50vh] flex justify-center overflow-hidden pointer-events-none z-0">
                {/* Deep Ambient Wash */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-orange-600/10 via-orange-600/5 to-transparent blur-[100px] opacity-80"></div>

                {/* The Horizon Line - Subtle & Sharp */}
                <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
                <div className="absolute top-0 w-[40%] h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent blur-[2px]"></div>
            </div>
        </>
    );
}
