type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-zinc-200 pb-10 pt-4">
      <h1 className="text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl 2xl:text-[2.5rem] min-[1920px]:text-5xl min-[2560px]:text-[3.25rem]">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 2xl:text-lg min-[1920px]:text-xl min-[1920px]:leading-relaxed min-[2560px]:text-2xl min-[2560px]:max-w-3xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
