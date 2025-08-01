export default function Head() {
  return (
    <>
      <title>Charted</title>

      {/* Default favicon */}
      <link
        rel="icon"
        href="/favicon.ico"
        sizes="any"
      />

      {/* Dark theme favicon */}
      <link
        rel="icon"
        href="/black-favicon.ico"
        media="(prefers-color-scheme: dark)"
        sizes="any"
      />
      
      {/* Apple touch icon */}
      <link
        rel="apple-touch-icon"
        href="/favicon.ico"
      />
      
      {/* Web manifest */}
      <link
        rel="manifest"
        href="/site.webmanifest"
      />
      
      {/* Theme color */}
      <meta name="theme-color" content="#334155" />
    </>
  );
}
