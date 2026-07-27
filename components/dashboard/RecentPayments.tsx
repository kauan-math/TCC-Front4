import Card from "@/components/ui/Card";

export default function RecentPayments() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">
        Pagamentos Recentes
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-white">
              Nenhum pagamento registrado
            </p>

            <span className="text-sm text-zinc-500">
              Os pagamentos aparecerão aqui.
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
