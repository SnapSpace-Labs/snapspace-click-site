import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

/** SnapSpace visual demonstration only. Do not connect this to a real decision gate. */
export type Mode = 'normal' | 'stop' | 'platform';
type Stage = 'intent' | 'authority' | 'execution' | 'evidence';
type Phase = 'inactive' | Stage | 'interrupted' | 'receipt' | 'settled';
export type FlowSnapshot = {
  mode: Mode;
  phase: Phase;
  active: Stage[];
  progress: number;
  interrupted: boolean;
  settled: boolean;
  message: string;
};
type Step = { at: number; phase: Phase; progress: number; message: string; stage?: Stage; stop?: true; settled?: true };
const initial = (mode: Mode): FlowSnapshot => ({ mode, phase: 'inactive', active: [], progress: 0, interrupted: false, settled: false, message: 'Inactive' });
const normal: Step[] = [
  { at: 600, phase: 'intent', stage: 'intent', progress: .14, message: 'Intent admitted' },
  { at: 1700, phase: 'authority', stage: 'authority', progress: .43, message: 'Authority established' },
  { at: 2800, phase: 'execution', stage: 'execution', progress: .70, message: 'Execution active' },
  { at: 3900, phase: 'evidence', stage: 'evidence', progress: 1, message: 'Evidence recorded' },
  { at: 4800, phase: 'settled', progress: 1, message: 'Settled / complete', settled: true },
];
const interrupted: Step[] = [
  { at: 600, phase: 'intent', stage: 'intent', progress: .14, message: 'Intent admitted' },
  { at: 1600, phase: 'authority', stage: 'authority', progress: .43, message: 'Authority established' },
  { at: 2600, phase: 'execution', stage: 'execution', progress: .70, message: 'Execution active' },
  { at: 3050, phase: 'interrupted', progress: .68, message: 'STOP — downstream inactive', stop: true },
  { at: 4000, phase: 'settled', progress: .68, message: 'STOP — downstream inactive', settled: true },
];
const platform: Step[] = [
  { at: 600, phase: 'intent', stage: 'intent', progress: .14, message: 'Intent admitted' },
  { at: 1500, phase: 'authority', stage: 'authority', progress: .43, message: 'Authority established' },
  { at: 2300, phase: 'execution', stage: 'execution', progress: .70, message: 'Execution active' },
  { at: 3100, phase: 'interrupted', progress: .68, message: 'STOP — consequential path interrupted', stop: true },
  { at: 3900, phase: 'receipt', progress: .68, message: 'STOP receipt / no downstream execution' },
  { at: 5400, phase: 'receipt', progress: .68, message: 'Interruption trace resolved' },
  { at: 6200, phase: 'settled', progress: .68, message: 'Settled / downstream inactive', settled: true },
];
const stages: Stage[] = ['intent', 'authority', 'execution', 'evidence'];
const stepsByMode: Record<Mode, Step[]> = { normal, stop: interrupted, platform };

export function useGovernedFlow(initialMode: Mode = 'platform', autoPlay = true) {
  const [state, setState] = useState<FlowSnapshot>(() => initial(initialMode));
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const generation = useRef(0);
  const snapshot = useRef(state);
  snapshot.current = state;
  const reducedMotion = useRef(false);
  const cancel = useCallback(() => {
    generation.current += 1;
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);
  const stop = useCallback(() => {
    cancel();
    setState(previous => ({ ...previous, phase: 'interrupted', active: previous.active.filter(stage => stage !== 'evidence'), progress: Math.min(previous.progress, .68), interrupted: true, settled: true, message: 'STOP — downstream inactive' }));
  }, [cancel]);
  const play = useCallback((mode: Mode = 'normal') => {
    cancel();
    setState(initial(mode));
    const currentGeneration = generation.current;
    if (reducedMotion.current) {
      setState(mode === 'normal'
        ? { mode, phase: 'settled', active: [...stages], progress: 1, interrupted: false, settled: true, message: 'Settled / complete' }
        : { mode, phase: 'settled', active: ['intent', 'authority', 'execution'], progress: .68, interrupted: true, settled: true, message: 'STOP — downstream inactive' });
      return;
    }
    for (const step of stepsByMode[mode]) {
      const timer = setTimeout(() => {
        if (generation.current !== currentGeneration) return;
        setState(previous => {
          // STOP cannot be cleared by a queued event or turned into downstream evidence.
          if (previous.interrupted && !step.stop && step.stage) return previous;
          const stopped = previous.interrupted || !!step.stop;
          const active = step.stage && !stopped ? [...previous.active, step.stage] : previous.active.filter(stage => stage !== 'evidence' || !stopped);
          return { mode, phase: step.phase, active, progress: step.progress, interrupted: stopped, settled: !!step.settled, message: step.message };
        });
      }, step.at);
      timers.current.push(timer);
    }
  }, [cancel]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion.current = mq.matches;
    const onChange = (event: MediaQueryListEvent) => { reducedMotion.current = event.matches; if (event.matches) cancel(); };
    mq.addEventListener?.('change', onChange);
    if (autoPlay) play(initialMode);
    else { cancel(); setState(initial(initialMode)); }
    return () => { cancel(); mq.removeEventListener?.('change', onChange); };
  }, [initialMode, autoPlay, play, cancel]);
  return { state, play, stop };
}

export type InteractiveFlowProps = { mode?: Mode; autoPlay?: boolean };
export default function InteractiveFlow({ mode = 'platform', autoPlay = true }: InteractiveFlowProps) {
  const { state, play, stop } = useGovernedFlow(mode, autoPlay);
  return (
    <section className="snapspace-flow" aria-label="Illustrative governed progression" data-phase={state.phase} data-interrupted={state.interrupted}>
      <div className="snapspace-flow__top"><span>GOVERNED STATE / VISUAL DEMONSTRATION</span><span role="status" aria-live="polite" aria-atomic="true">{state.message}</span></div>
      <div className="snapspace-flow__rail" style={{ '--progress': `${state.progress * 100}%` } as CSSProperties}>
        <div className="snapspace-flow__line" aria-hidden="true"><div className="snapspace-flow__fill" /></div>
        {stages.map(stage => <div className="snapspace-flow__node" key={stage} data-active={state.active.includes(stage)} data-stage={stage}>
          <span className="snapspace-flow__dot" aria-hidden="true" /><span>{stage}</span>
        </div>)}
        <div className="snapspace-flow__stop" aria-hidden="true">STOP</div>
      </div>
      <div className="snapspace-flow__controls">
        <button type="button" onClick={() => play('normal')}>Replay normal</button>
        <button type="button" onClick={stop}>Interrupt / STOP</button>
        <button type="button" onClick={() => play('stop')}>Replay STOP</button>
      </div>
      <p className="snapspace-flow__footnote">Visual demonstration only. STOP interrupts active progression; it does not imply rollback or downstream execution.</p>
    </section>
  );
}