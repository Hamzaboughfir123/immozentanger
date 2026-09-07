"use client";

import { Button } from "@/components/ui/Button";
import { DEFAULT_COMMISSION_RATE } from "@/lib/constants";
import { formatMAD, formatThousands } from "@/lib/utils";
import { useId, useMemo, useState } from "react";

const MIN_VALUE = 200_000;
const MAX_VALUE = 15_000_000;
const STEP_VALUE = 50_000;

const RATE_PRESETS = [1.5, 2.5, 3.5, 5];

export function SavingsCalculator() {
  const [value, setValue] = useState(5_000_000);
  const [rate, setRate] = useState(DEFAULT_COMMISSION_RATE);
  const valueId = useId();
  const rateId = useId();

  const traditionalCommission = useMemo(() => (value * rate) / 100, [value, rate]);

  function handleValueInput(raw: string) {
    const parsed = Number(raw.replace(/[^\d]/g, ""));
    if (Number.isNaN(parsed)) {
      setValue(0);
      return;
    }
    setValue(Math.min(parsed, 100_000_000));
  }

  return (
    <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_90px_-30px_rgba(16,18,15,0.25)] lg:grid-cols-2">
      {/* Inputs */}
      <div className="flex min-w-0 flex-col gap-5 p-4 sm:p-8">
        <div>
          <label
            htmlFor={valueId}
            className="mb-3 block text-sm font-semibold text-brand-ink/70"
          >
            Valeur estimée du bien
          </label>
          <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-brand-ink/10 bg-brand-beige/40 px-4 py-3 sm:px-5 sm:py-4">
            <input
              id={valueId}
              type="text"
              inputMode="numeric"
              value={formatThousands(value)}
              onChange={(e) => handleValueInput(e.target.value)}
              className="min-w-0 w-full bg-transparent font-display text-xl font-medium text-brand-ink outline-none sm:text-2xl"
              aria-describedby={`${valueId}-suffix`}
            />
            <span id={`${valueId}-suffix`} className="text-sm font-semibold text-brand-ink/50">
              DH
            </span>
          </div>
          <input
            type="range"
            min={MIN_VALUE}
            max={MAX_VALUE}
            step={STEP_VALUE}
            value={Math.min(value, MAX_VALUE)}
            onChange={(e) => setValue(Number(e.target.value))}
            className="mt-4 w-full accent-brand-forest"
            aria-label="Ajuster la valeur du bien avec le curseur"
          />
        </div>

        <div>
          <label
            htmlFor={rateId}
            className="mb-3 block text-sm font-semibold text-brand-ink/70"
          >
            Taux de commission traditionnel estimé
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby={rateId}>
            {RATE_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                id={preset === DEFAULT_COMMISSION_RATE ? rateId : undefined}
                onClick={() => setRate(preset)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  rate === preset
                    ? "bg-brand-forest text-white"
                    : "bg-brand-beige/60 text-brand-ink/70 hover:bg-brand-beige"
                }`}
                aria-pressed={rate === preset}
              >
                {preset.toString().replace(".", ",")} %
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="flex min-w-0 flex-col justify-between gap-5 bg-brand-forest p-4 text-white sm:p-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3 text-sm text-white/70">
            <span className="min-w-0">Commission traditionnelle estimée ({rate.toString().replace(".", ",")} %)</span>
            <span className="shrink-0 font-semibold text-right text-white">{formatMAD(traditionalCommission)}</span>
          </div>
          <div className="flex items-start justify-between gap-3 text-sm text-white/70">
            <span className="min-w-0">Commission propriétaire ImmoZen Groupe</span>
            <span className="shrink-0 font-semibold text-right text-brand-pistachio">0 DH*</span>
          </div>
          <div className="h-px w-full bg-white/15" />
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-pistachio px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-ink">
              100 % d&rsquo;économie garantie
            </span>
            <p className="mt-2 text-sm font-medium text-white/70">Économie potentielle</p>
            <p className="mt-1 font-display text-4xl font-medium text-brand-pistachio tabular-nums drop-shadow-[0_0_30px_rgba(165,210,50,0.35)]">
              {formatMAD(traditionalCommission)}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button href="#confier-mon-bien" variant="primary" size="lg" className="w-full">
            Je souhaite vendre sans commission
          </Button>
          <p className="text-xs leading-relaxed text-white/50">
            *Simulation indicative basée sur le taux sélectionné. Les conditions
            exactes du service ImmoZen Groupe seront précisées contractuellement.
          </p>
        </div>
      </div>
    </div>
  );
}
