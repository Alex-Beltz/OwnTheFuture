'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Zap, Globe, TrendingUp, Lock, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 backdrop-blur-xl bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            Own<span className="text-emerald-400">The</span>Future
          </span>
          <div className="flex items-center gap-3">
            <Link
              href="/projects/bali-villa-1"
              className="text-sm text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-zinc-800/50"
            >
              Bali Villa
            </Link>
            <Link
              href="/projects/bali-villa-1"
              className="text-sm bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-1.5 rounded-lg transition-all duration-200 glow-green-sm"
            >
              Enter Platform
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 sm:pt-44 sm:pb-32 px-5 sm:px-8 min-h-screen flex flex-col justify-center noise-bg">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-600/4 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-400/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-slow" />
            Now live — Bali Villa Project is open for investment
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.88] tracking-tight mb-8 animate-fade-up">
            <span className="block text-white">Own the AI</span>
            <span className="block gradient-text py-1">and assets replacing</span>
            <span className="block text-white">your job.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
            The next wave of automation will eliminate millions of jobs.
            The people who own the tools — AI systems, real assets, tokenized yields —
            will capture all the upside.{' '}
            <span className="text-zinc-200 font-semibold">That&apos;s why we built this.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects/bali-villa-1"
              className="group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 glow-green"
            >
              Enter Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects/bali-villa-1"
              className="group inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
            >
              View Bali Villa
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center mt-20 pt-12 border-t border-zinc-800/60">
            {[
              { label: 'Target Yield', value: '11–15%' },
              { label: 'First Raise', value: '$150–170k' },
              { label: 'Asset Type', value: 'Real Estate' },
              { label: 'Blockchain', value: 'Hedera' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">{stat.value}</div>
                <div className="text-xs text-zinc-500 font-semibold mt-1 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-centralization manifesto */}
      <section className="py-24 px-5 sm:px-8 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">The Problem</div>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
                Centralization is the{' '}
                <span className="text-emerald-400">real threat.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-5">
                Big tech owns the AI. Hedge funds own the assets. Governments print the money.
                The wealth generated by the next decade of automation will flow upward —
                unless you own a piece of the machinery.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                OwnTheFuture is a co-ownership platform for tokenized real-world assets —
                starting with premium real estate in high-growth markets.
                No gatekeeping. No minimum millions. Just direct, on-chain ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: Shield,
                  title: 'You own the asset',
                  desc: 'Tokenized co-ownership recorded on-chain. Your share. Your rights. No intermediary can dilute it.',
                },
                {
                  icon: TrendingUp,
                  title: 'Real yield, not promises',
                  desc: 'Rental income distributed directly to your wallet. 11–15% projected annual yield, paid monthly.',
                },
                {
                  icon: Lock,
                  title: 'No bank, no broker',
                  desc: 'Connect your wallet. Join the raise. Smart contracts handle all distributions automatically.',
                },
                {
                  icon: Globe,
                  title: 'Global, borderless',
                  desc: "Premium assets in the world's best markets. Own a piece of Bali from anywhere on earth.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-200 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-zinc-400 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bali Villa Teaser */}
      <section className="py-24 px-5 sm:px-8 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 glow-green">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950/40" />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80')" }}
            />
            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-slow" />
                    Live Raise · First Project
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
                    Bali Villa —{' '}
                    <span className="text-emerald-400">150m²</span>
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    A premium short-term rental villa in Bali, Indonesia. Fully managed,
                    Airbnb-listed, projected to yield between 11–15% annually based on
                    current occupancy data. 25-year land lease. Private pool.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: 'Size', value: '150 m²' },
                      { label: 'Raise', value: '$150–170k' },
                      { label: 'Yield', value: '11–15%' },
                      { label: 'Location', value: 'Bali, ID' },
                    ].map((s) => (
                      <div key={s.label} className="bg-zinc-950/60 border border-zinc-800 rounded-xl p-4">
                        <div className="text-xl font-black text-emerald-400">{s.value}</div>
                        <div className="text-xs text-zinc-500 mt-0.5 uppercase tracking-wide font-medium">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tailwind-only progress bar */}
                  <div className="mb-7">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-400 font-medium">Raise progress</span>
                      <span className="text-emerald-400 font-bold">34% funded</span>
                    </div>
                    <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full w-[34%] bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" />
                    </div>
                    <div className="flex justify-between text-xs text-zinc-600 mt-1.5">
                      <span>$51,000 raised</span>
                      <span>$150,000 target</span>
                    </div>
                  </div>

                  <Link
                    href="/projects/bali-villa-1"
                    className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3.5 rounded-xl transition-all duration-200 glow-green-sm"
                  >
                    View Full Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="lg:flex-shrink-0 lg:w-72 xl:w-80">
                  <div className="rounded-2xl overflow-hidden border border-zinc-700 aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=85"
                      alt="Bali Villa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-5 sm:px-8 border-t border-zinc-800/60">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">How It Works</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-16">Three steps to ownership.</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Connect Wallet',
                desc: "Link your HashPack or compatible Hedera wallet. No account creation, no KYC friction.",
                icon: Zap,
              },
              {
                step: '02',
                title: 'Choose Your Stake',
                desc: "Select how much you want to invest. Start small. Scale up. It's entirely your call.",
                icon: Users,
              },
              {
                step: '03',
                title: 'Earn Yield',
                desc: 'Rental income distributed on-chain, automatically, to your wallet every single month.',
                icon: TrendingUp,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-left group hover:border-emerald-500/30 transition-all duration-200"
              >
                <div className="text-7xl font-black text-zinc-800/60 group-hover:text-emerald-900/40 transition-colors absolute top-3 right-4 leading-none select-none">
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-5 sm:px-8 border-t border-zinc-800/60">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-5">
            The future belongs to{' '}
            <span className="text-emerald-400">owners.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Stop renting your labor to those who own the machines. Start owning the machines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects/bali-villa-1"
              className="group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 glow-green"
            >
              Enter Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects/bali-villa-1"
              className="group inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
            >
              View Bali Villa
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 sm:px-8 border-t border-zinc-800/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-base font-bold">
            Own<span className="text-emerald-400">The</span>Future
          </span>
          <p className="text-xs text-zinc-600 text-center max-w-md">
            Not financial advice. Investments in real-world assets carry risk. Past performance does not guarantee future results.
          </p>
          <p className="text-xs text-zinc-600">© 2026 OwnTheFuture</p>
        </div>
      </footer>
    </div>
  );
}
