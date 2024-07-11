import { Shield } from "../icons/shield";
import { WooviNeutral } from "../icons/woovi-neutral";

export function Footer() {
  return (
    <footer className="mt-10">
      <span className="flex gap-1 text-sm text-center text-muted">
        <Shield />
        Pagamento 100% seguro via:
        <WooviNeutral />
      </span>
    </footer>
  );
}
