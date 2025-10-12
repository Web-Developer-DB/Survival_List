export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Erstellt im Dracula-Theme by Dimitri B · © <span>{year}</span>
      </p>
    </footer>
  );
}
