'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  TrendingUp,
  Home,
  Calendar,
  Wifi,
  Wind,
  Droplets,
  Star,
  Wallet,
  ChevronRight,
  Shield,
  Users,
  Info,
} from 'lucide-react';

const RAISE_TARGET = 150000;
const PROGRESS_PERCENT = 34;

export default function BaliVillaPage() {
  const [investment, setInvestment] = useState(5000);
  const [walletConnected, setWalletConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const yieldLow = 0.11;
  const yieldHigh = 0.15;
  const annualLow = Math.round(investment * yieldLow);
  const annualHigh = Math.round(investment * yieldHigh);
  const monthlyLow = Math.round(annualLow / 12);
  const monthlyHigh = Math.round(annualHigh / 12);
  const ownershipPct = ((investment / RAISE_TARGET) * 100).toFixed(2);

  const handleConnect = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setWalletConnected(true);
    }, 1800);
  };

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 backdrop-blur-xl bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          <span className="text-base font-bold">
            Own<span className="text-emerald-400">The</span>Future
          </span>
          {walletConnected ? (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              Connected
            </div>
          ) : (
            <button
              onClick={handleConnect}
              disabled={connecting}
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-700 text-black font-semibold text-sm transition-all duration-200"
            >
              <Wallet className="w-3.5 h-3.5" />
              {connecting ? 'Connecting…' : 'HashPack'}
            </button>
          )}
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-[55vh] sm:h-[65vh] pt-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=85"
          alt="Bali Villa aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 pb-10">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-slow" />
              Live Raise · Accepting Investments
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight">
              Bali Villa —{' '}
              <span className="text-emerald-400">Project #001</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                Ubud, Bali, Indonesia
              </span>
              <span className="flex items-center gap-1.5">
                <Home className="w-4 h-4 text-emerald-400" />
                150 m² · 3BR · Private Pool
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-emerald-400" />
                4.9 / 5.0 Airbnb rating
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">

          {/* Left — Project Details */}
          <div className="lg:col-span-2 space-y-8">

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Raise Target', value: '$150–170k' },
                { label: 'Projected Yield', value: '11–15%' },
                { label: 'Property Size', value: '150 m²' },
                { label: 'Lease Term', value: '25 years' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wide font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Funding Progress — Tailwind only, no library */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-white">Funding Progress</span>
                <span className="text-emerald-400 font-bold text-lg">{PROGRESS_PERCENT}%</span>
              </div>
              <div className="h-3 bg-zinc-800 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                  style={{ width: `${PROGRESS_PERCENT}%` }}
                />
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wide font-medium mb-0.5">Raised</div>
                  <div className="font-bold text-white">{fmt(Math.round(RAISE_TARGET * PROGRESS_PERCENT / 100))}</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wide font-medium mb-0.5">Target</div>
                  <div className="font-bold text-white">$150,000</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wide font-medium mb-0.5">Investors</div>
                  <div className="font-bold text-white">23</div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <h2 className="text-xl font-bold mb-4">About This Property</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                A stunning 3-bedroom private pool villa in Ubud, Bali — one of the most sought-after short-term
                rental destinations in Southeast Asia. The property sits on 800 m² of land with a 25-year lease,
                professionally managed by a local hospitality partner with a 4.9/5.0 Airbnb rating across
                200+ stays.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Projected occupancy runs at 72–85% annually, driven by year-round tourism demand.
                Revenue is distributed monthly to token holders based on fractional ownership.
                Smart contracts on Hedera handle all distributions automatically — no trust required.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Wifi, label: 'High-Speed WiFi' },
                  { icon: Wind, label: 'A/C Throughout' },
                  { icon: Droplets, label: 'Private Pool' },
                  { icon: Star, label: 'SuperHost Managed' },
                ].map((amenity) => (
                  <div key={amenity.label} className="flex items-center gap-2 text-sm text-zinc-400">
                    <amenity.icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {amenity.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Details */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <h2 className="text-xl font-bold mb-5">Financial Details</h2>
              <div className="space-y-4">
                {[
                  { label: 'Annual gross rental income (est.)', value: '$21,000 – $28,000' },
                  { label: 'Management fee', value: '25% of gross income' },
                  { label: 'Net distributable yield', value: '11% – 15% p.a.' },
                  { label: 'Distribution frequency', value: 'Monthly, on-chain' },
                  { label: 'Token standard', value: 'Hedera Token Service (HTS)' },
                  { label: 'Minimum investment', value: '$500' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-zinc-800/80 last:border-0">
                    <span className="text-sm text-zinc-400">{row.label}</span>
                    <span className="text-sm font-semibold text-white">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 flex gap-4">
              <Info className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-500 leading-relaxed">
                Investing in real-world asset tokens carries risk, including loss of principal.
                Projected yields (11–15%) are based on current market occupancy data and are not guaranteed.
                Past rental performance does not guarantee future results. This is not financial advice.
                Please conduct your own due diligence before investing.
              </p>
            </div>
          </div>

          {/* Right — Investment Panel (sticky) */}
          <div>
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 sticky top-24">
              <h3 className="text-lg font-bold mb-1">Yield Calculator</h3>
              <p className="text-xs text-zinc-500 mb-6">Estimate your returns before committing</p>

              {/* Amount input */}
              <div className="mb-5">
                <label className="text-sm text-zinc-400 font-medium block mb-2">
                  Investment Amount (USD)
                </label>
                <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 focus-within:border-emerald-500/60 transition-colors">
                  <span className="text-zinc-500 font-semibold">$</span>
                  <input
                    type="number"
                    value={investment}
                    onChange={(e) => {
                      const val = Math.max(500, Math.min(170000, Number(e.target.value)));
                      setInvestment(val);
                    }}
                    className="flex-1 bg-transparent text-white font-bold text-lg outline-none tabular-nums"
                    min={500}
                    max={170000}
                  />
                </div>
              </div>

              {/* Slider */}
              <div className="mb-6">
                <input
                  type="range"
                  min={500}
                  max={170000}
                  step={500}
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="range-slider w-full"
                />
                <div className="flex justify-between text-xs text-zinc-600 mt-2">
                  <span>$500</span>
                  <span>$170,000</span>
                </div>
              </div>

              {/* Projected returns */}
              <div className="rounded-xl bg-zinc-950/80 border border-zinc-800 p-4 mb-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-400">Your ownership</span>
                  <span className="font-bold text-emerald-400">{ownershipPct}%</span>
                </div>
                <div className="h-px bg-zinc-800" />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-400">Annual (conservative)</span>
                  <span className="font-bold text-white">{fmt(annualLow)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-400">Annual (optimistic)</span>
                  <span className="font-bold text-emerald-400">{fmt(annualHigh)}</span>
                </div>
                <div className="h-px bg-zinc-800" />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-400">Monthly (est.)</span>
                  <span className="font-semibold text-zinc-300 text-sm">
                    {fmt(monthlyLow)} – {fmt(monthlyHigh)}
                  </span>
                </div>
              </div>

              {/* CTA */}
              {walletConnected ? (
                <button className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 rounded-xl transition-all duration-200 text-base glow-green-sm">
                  Invest {fmt(investment)}
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleConnect}
                  disabled={connecting}
                  className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-60 border border-zinc-700 text-white font-bold py-4 rounded-xl transition-all duration-200 text-base"
                >
                  <Wallet className="w-4 h-4 text-emerald-400" />
                  {connecting ? 'Connecting to HashPack…' : 'Connect HashPack Wallet'}
                </button>
              )}

              {walletConnected && (
                <div className="flex items-center gap-2 justify-center mt-3 text-xs text-emerald-400">
                  <Shield className="w-3 h-3" />
                  Wallet connected · Hedera mainnet
                </div>
              )}

              {!walletConnected && (
                <p className="text-center text-xs text-zinc-600 mt-3">
                  Wallet required to invest
                </p>
              )}

              {/* Social proof */}
              <div className="mt-5 pt-4 border-t border-zinc-800">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Users className="w-4 h-4" />
                    <span>23 investors</span>
                  </div>
                  <span className="text-zinc-600 text-xs">Closes in 47 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-5 sm:px-8 border-t border-zinc-800/60 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-base font-bold">
            Own<span className="text-emerald-400">The</span>Future
          </Link>
          <p className="text-xs text-zinc-600 text-center">
            Not financial advice. Real-world asset investments carry risk.
          </p>
          <p className="text-xs text-zinc-600">© 2026</p>
        </div>
      </footer>
    </div>
  );
}
