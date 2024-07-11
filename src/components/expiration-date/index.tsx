export function ExpirationDate() {
  const date = new Date().toLocaleDateString();
  const hourPlus4 = new Date(
    new Date().setHours(new Date().getHours() + 4)
  ).toLocaleTimeString();

  return (
    <div className="flex flex-col items-center font-semibold mt-5">
      <p className="text-muted">Prazo de pagamento:</p>
      <span className="font-bold text-foreground">
        {date} - {hourPlus4}
      </span>
    </div>
  );
}
