/* ===================================================================
   TWEAKS — bridges panel controls to the design via <html> attributes
   =================================================================== */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "olive",
  "font": "helvetica",
  "sidebar": "light"
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement;
    r.setAttribute('data-accent', t.accent);
    r.setAttribute('data-font', t.font);
    r.setAttribute('data-side', t.sidebar);
  }, [t.accent, t.font, t.sidebar]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent direction" />
      <TweakRadio
        label="Color"
        value={t.accent}
        options={['olive', 'mono', 'clay']}
        onChange={(v) => setTweak('accent', v)}
      />
      <TweakSection label="Sidebar tone" />
      <TweakRadio
        label="Panel"
        value={t.sidebar}
        options={['light', 'dark']}
        onChange={(v) => setTweak('sidebar', v)}
      />
      <TweakSection label="Headline type" />
      <TweakRadio
        label="Typeface"
        value={t.font}
        options={['helvetica', 'archivo', 'grotesk']}
        onChange={(v) => setTweak('font', v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<TweaksApp />);
