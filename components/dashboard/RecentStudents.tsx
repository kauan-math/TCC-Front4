import Card from "@/components/ui/Card";

export default function RecentStudents() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold text-white">Alunos Recentes</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-white">Nenhum aluno cadastrado</p>

            <span className="text-sm text-zinc-500">
              Cadastre seu primeiro aluno.
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
