export const HomeBentoGrid = () => {
  return (
    <section className="lg:-mt-20 mx-auto flex max-w-6xl flex-col gap-8 bg-gray px-4 pb-24 lg:pb-32">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex h-auto flex-col rounded-3xl border border-dark-gray/50 bg-white p-8 md:relative md:h-[30rem] lg:basis-2/3" />

        <div className="flex h-auto flex-col overflow-hidden rounded-3xl border border-dark-gray/50 bg-white p-8 md:relative md:h-[30rem] lg:basis-1/3" />
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex h-auto flex-col justify-between overflow-hidden rounded-3xl border border-dark-gray/50 bg-white p-8 md:h-[30rem] lg:basis-1/3" />
        <div className="flex h-auto flex-col rounded-3xl border border-dark-gray/50 bg-white p-8 md:relative md:h-[30rem] lg:basis-2/3" />
      </div>

      <div className="flex flex-col gap-9 sm:flex-row">
        <div className="flex-1 rounded-3xl border border-dark-gray/50 bg-white p-8 md:h-[30rem] md:p-14" />
        <div className="flex-1 rounded-3xl border border-dark-gray/50 bg-white p-8 md:h-[30rem] md:p-14" />
      </div>
    </section>
  );
};
