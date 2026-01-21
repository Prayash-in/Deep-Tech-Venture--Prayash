import Image from 'next/image';

export function Footer() {
    return (
        <footer className="w-full py-10 border-t border-border bg-background mt-auto relative z-20 shadow-[0_-20px_60px_rgba(249,115,22,0.05)] transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.15em] uppercase">
                <div className="flex items-center gap-3 text-foreground transition-colors duration-500">
                    <Image
                        src="/Logoone.png"
                        alt="Somadhan Group"
                        width={128}
                        height={128}
                        className="w-32 h-32 object-contain"
                    />
                </div>
                <div className="flex gap-8 text-muted-foreground">
                    <span className="hover:text-orange-500 cursor-pointer transition-colors duration-300">Twitter</span>
                    <span className="hover:text-orange-500 cursor-pointer transition-colors duration-300">LinkedIn</span>
                    <span className="hover:text-orange-500 cursor-pointer transition-colors duration-300">Email</span>
                </div>
            </div>
            <div className="w-full text-center mt-6 pt-6 border-t border-border text-[10px] text-muted-foreground font-mono tracking-widest transition-colors duration-500">
                Copyright © 2025 Somadhan Group. All Rights Reserved.
            </div>
        </footer>
    );
}
