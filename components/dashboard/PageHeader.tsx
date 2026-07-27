interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">{title}</h1>

        {description && <p className="mt-2 text-zinc-400">{description}</p>}
      </div>
    </div>
  );
}
