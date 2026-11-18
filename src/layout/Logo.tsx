/** Heart with a leaf; same drawing as public/favicon.svg, on a multi-color gradient (one hue per module). */
export const LogoMark = () => (
  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-sky-500 to-violet-500 text-white shadow-md shadow-sky-500/25">
    <svg viewBox="8 9 48 45" width={22} height={22} aria-hidden="true">
      <path
        d="M32 52C15 41 9 31 9 23c0-7 5.5-12 12-12 4.6 0 8.4 2.6 11 6.4C34.6 13.6 38.4 11 43 11c6.5 0 12 5 12 12 0 8-6 18-23 29z"
        fill="currentColor"
      />
      <path d="M23 37c0-10 7-16 18-16 0 10-6 17-16 17z" className="fill-sky-600" />
      <path d="M25 37l10-10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  </span>
);

export const Logo = () => (
  <div className="flex items-center gap-2.5">
    <LogoMark />
    <div className="leading-tight">
      <p className="font-display text-sm font-extrabold text-slate-900">LifePlan</p>
      <p className="text-[11px] text-slate-500">Body, health & faith</p>
    </div>
  </div>
);
