import React, { useState } from 'react';
import { CALCULATOR_PRESETS } from '../data/tradeData';
import { Calculator, DollarSign, ArrowRight, RefreshCw, Layers, PieChart, ShieldAlert } from 'lucide-react';

export default function LandedCostCalculator() {
  const [selectedPresetIdx, setSelectedPresetIdx] = useState(0);

  // Form State
  const [productCost, setProductCost] = useState(CALCULATOR_PRESETS[0].productCost);
  const [units, setUnits] = useState(CALCULATOR_PRESETS[0].units);
  const [originInland, setOriginInland] = useState(CALCULATOR_PRESETS[0].originInland);
  const [freightCost, setFreightCost] = useState(CALCULATOR_PRESETS[0].freightCost);
  const [insuranceCost, setInsuranceCost] = useState(CALCULATOR_PRESETS[0].insuranceCost);
  const [dutyRate, setDutyRate] = useState(CALCULATOR_PRESETS[0].dutyRate);
  const [vatTaxRate, setVatTaxRate] = useState(CALCULATOR_PRESETS[0].vatTaxRate);
  const [portHandling, setPortHandling] = useState(CALCULATOR_PRESETS[0].portHandling);
  const [destInland, setDestInland] = useState(CALCULATOR_PRESETS[0].destInland);
  const [currency, setCurrency] = useState('USD');

  // Load Preset
  const handleSelectPreset = (idx) => {
    setSelectedPresetIdx(idx);
    const p = CALCULATOR_PRESETS[idx];
    setProductCost(p.productCost);
    setUnits(p.units);
    setOriginInland(p.originInland);
    setFreightCost(p.freightCost);
    setInsuranceCost(p.insuranceCost);
    setDutyRate(p.dutyRate);
    setVatTaxRate(p.vatTaxRate);
    setPortHandling(p.portHandling);
    setDestInland(p.destInland);
    setCurrency(p.currency);
  };

  // Math Calculations
  const numUnits = Math.max(1, Number(units) || 1);
  const numProductCost = Number(productCost) || 0;
  const numOriginInland = Number(originInland) || 0;
  const numFreight = Number(freightCost) || 0;
  const numInsurance = Number(insuranceCost) || 0;
  const numDutyRate = Number(dutyRate) || 0;
  const numVatRate = Number(vatTaxRate) || 0;
  const numPortHandling = Number(portHandling) || 0;
  const numDestInland = Number(destInland) || 0;

  // FOB Value = Goods + Origin Inland
  const fobTotal = numProductCost + numOriginInland;

  // CIF Value = FOB + Main Freight + Insurance
  const cifTotal = fobTotal + numFreight + numInsurance;

  // Customs Duty = CIF * (dutyRate / 100)
  const customsDuty = cifTotal * (numDutyRate / 100);

  // VAT / Sales Tax = (CIF + Duty) * (vatRate / 100)
  const vatTax = (cifTotal + customsDuty) * (numVatRate / 100);

  // Grand Total Landed Cost
  const totalLandedCost = cifTotal + customsDuty + vatTax + numPortHandling + numDestInland;

  // Per Unit
  const exwPerUnit = numProductCost / numUnits;
  const fobPerUnit = fobTotal / numUnits;
  const landedPerUnit = totalLandedCost / numUnits;
  const markupMultiplier = exwPerUnit > 0 ? (landedPerUnit / exwPerUnit).toFixed(2) : '1.00';

  return (
    <section id="calculator" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Real-World Trade Costing Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Export / Import Landed Cost Calculator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Never quote an international buyer blindly. Simulate ex-factory costs, ocean freight, customs tariffs, and final warehouse arrival costs.
          </p>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-trade-400" />
            Load Sample Scenario:
          </span>
          {CALCULATOR_PRESETS.map((preset, idx) => (
            <button
              key={preset.name}
              onClick={() => handleSelectPreset(idx)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                selectedPresetIdx === idx
                  ? 'bg-trade-600 text-white border-trade-400 shadow-md shadow-trade-600/30'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] flex items-center gap-2 border-b border-slate-800 pb-3">
              <span>Trade Cost Variables</span>
              <span className="text-xs text-trade-400 font-normal ml-auto">All values in {currency}</span>
            </h3>

            {/* Row 1: Product & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Ex-Factory Goods Value ({currency})
                </label>
                <input
                  type="number"
                  value={productCost}
                  onChange={(e) => setProductCost(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-white font-mono text-sm focus:outline-none focus:border-trade-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Total Order Quantity (Units)
                </label>
                <input
                  type="number"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-white font-mono text-sm focus:outline-none focus:border-trade-400"
                />
              </div>
            </div>

            {/* Row 2: Origin Logistics & Main Carriage */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Origin Trucking & Export THC
                </label>
                <input
                  type="number"
                  value={originInland}
                  onChange={(e) => setOriginInland(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-white font-mono text-sm focus:outline-none focus:border-trade-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Ocean / Air Freight
                </label>
                <input
                  type="number"
                  value={freightCost}
                  onChange={(e) => setFreightCost(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-white font-mono text-sm focus:outline-none focus:border-trade-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Marine Cargo Insurance
                </label>
                <input
                  type="number"
                  value={insuranceCost}
                  onChange={(e) => setInsuranceCost(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-white font-mono text-sm focus:outline-none focus:border-trade-400"
                />
              </div>
            </div>

            {/* Row 3: Customs Duty & Taxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Customs Tariff / Duty Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={dutyRate}
                  onChange={(e) => setDutyRate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-white font-mono text-sm focus:outline-none focus:border-trade-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Import VAT / Goods & Services Tax (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={vatTaxRate}
                  onChange={(e) => setVatTaxRate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-white font-mono text-sm focus:outline-none focus:border-trade-400"
                />
              </div>
            </div>

            {/* Row 4: Destination Port & Final Trucking */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Destination Port Handling & CHA Broker Fee
                </label>
                <input
                  type="number"
                  value={portHandling}
                  onChange={(e) => setPortHandling(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-white font-mono text-sm focus:outline-none focus:border-trade-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Destination Inland Warehouse Drayage
                </label>
                <input
                  type="number"
                  value={destInland}
                  onChange={(e) => setDestInland(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2 text-white font-mono text-sm focus:outline-none focus:border-trade-400"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] flex items-center justify-between border-b border-slate-800 pb-3">
              <span>Landed Cost Breakdown</span>
              <span className="text-xs px-2 py-0.5 rounded bg-trade-500/20 text-trade-300 border border-trade-500/30">
                1 unit = {currency} {landedPerUnit.toFixed(2)}
              </span>
            </h3>

            {/* Big Landed Cost Display */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Total Landed Investment
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                {currency} {totalLandedCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-emerald-400 font-semibold mt-1">
                Landed cost is {markupMultiplier}x of origin ex-factory price
              </p>
            </div>

            {/* Step-by-Step Quotation Bridges */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">1. Ex-Factory (EXW):</span>
                <span className="text-white font-mono font-medium">{currency} {numProductCost.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">2. Free On Board (FOB Port):</span>
                <span className="text-white font-mono font-medium">{currency} {fobTotal.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">3. CIF Value (Customs Base):</span>
                <span className="text-cyan-300 font-mono font-semibold">{currency} {cifTotal.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">4. Customs Duty ({numDutyRate}%):</span>
                <span className="text-amber-400 font-mono font-medium">+{currency} {customsDuty.toFixed(2)}</span>
              </div>

              {numVatRate > 0 && (
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">5. Import VAT / GST ({numVatRate}%):</span>
                  <span className="text-amber-400 font-mono font-medium">+{currency} {vatTax.toFixed(2)}</span>
                </div>
              )}

              <div className="flex items-center justify-between py-1.5">
                <span className="text-slate-400">6. Port Clearance & Final Drayage:</span>
                <span className="text-white font-mono font-medium">+{currency} {(numPortHandling + numDestInland).toLocaleString()}</span>
              </div>
            </div>

            {/* Per-Unit Comparison Box */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">Unit EXW Cost</span>
                <span className="text-base font-bold text-white font-mono">
                  {currency} {exwPerUnit.toFixed(2)}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-trade-500/40 text-center">
                <span className="text-[11px] text-trade-300 block">Unit Landed Cost</span>
                <span className="text-base font-bold text-trade-400 font-mono">
                  {currency} {landedPerUnit.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

