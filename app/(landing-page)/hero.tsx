import React from 'react'
import { Badge } from '@/components/ui/badge'

import Link from 'next/link'
import { Cinzel } from "next/font/google";
import ModelViewer from './3dModel';


const logoFont = Cinzel({
    subsets: ["latin"],
    weight: ["600", "700"]
});





export default function Hero() {
    return (
        <div>
            <main>
                {/* Main Hero Area */}
                <main className="flex-1 w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-0 relative z-10 mt-10">

                    {/* Left Content */}
                    <section className=" flex-1  space-y-8 max-w-2xl mt-8 lg:mt-16 relative z-20">


                        <h2 className={`${logoFont.className} text-5xl lg:text-[4.5rem] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight`}>
                            Digital Panchayat Seva <br />
                            <span className={`${logoFont.className} bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500 bg-clip-text text-transparent`}>
                                at your fingertips.
                            </span>
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                            Welcome to the Digital Panchayat. We bridge the gap between citizens and local governance, making administration transparent, accessible, and highly efficient for every village.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <button className="px-8 py-4 bg-yellow-900 text-white font-semibold rounded-xl hover:bg-yellow-900 transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 hover:-translate-y-0.5">
                                Explore Services
                            </button>
                            <button className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
                                <Link href="https://www.youtube.com/watch?v=f06O65ModmU">Watch Demo</Link>
                            </button>
                        </div>


                    </section>

                    {/* Right 3D Model Area */}
                    <section className="w-full lg:w-auto h-auto lg:h-[600px]  relative flex items-center justify-center lg:mt-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-linear-to-tr from-orange-200/10 via-amber-100/20 dark:from-orange-500/10 dark:via-amber-500/5 to-transparent rounded-full blur-[80px] -z-10"></div>

                        <div className="w-full relative z-10 flex items-center justify-center drop-shadow-[0_0_35px_rgba(249,115,22,0.15)]">
                            <ModelViewer />
                        </div>
                    </section>
                </main>
                <section className="flex justify-center items-center py-12 px-4">
                    <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
                        <div className="relative w-full aspect-video">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/EtfAXwZ8es0?controls=1&rel=0"
                                title="Digi-Panch Explainer"
                                allow="encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}
