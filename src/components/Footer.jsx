export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Survival-Board für den Offline-Druck · © <span>{year}</span>
      </p>
    </footer>
  );
}
