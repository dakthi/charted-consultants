export default function Head() {
  return (
    <>
      <title>Charted</title>

      {/* Light theme favicon */}
      <link
        rel="icon"
        href="/white-favicon.ico"
        media="(prefers-color-scheme: light)"
        sizes="any"
      />

      {/* Dark theme favicon */}
      <link
        rel="icon"
        href="/black-favicon.ico"
        media="(prefers-color-scheme: dark)"
        sizes="any"
      />
    </>
  );
}
