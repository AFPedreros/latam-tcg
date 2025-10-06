import { CircleCheck } from "lucide-react";

export const HomeBentoGrid = () => {
  return (
    <section className="lg:-mt-20 relative z-10 mx-auto flex max-w-6xl flex-col gap-8 bg-gray px-4 pb-24 lg:pb-32">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex h-auto flex-col rounded-3xl border border-dark-gray/50 bg-white p-8 md:relative md:h-[30rem] lg:basis-2/3">
          <div className="order-1 md:order-none">
            <p className="text-balance text-4xl">Vende cartas TCG</p>
            <p className="mt-4 md:absolute md:bottom-8 md:left-8 md:mt-0 md:w-1/2">
              Crea tu tienda en línea y comienza a vender tus cartas TCG hoy
              mismo. Con nuestra plataforma fácil de usar, puedes listar tus
              cartas, gestionar inventario y procesar pagos de manera segura.
            </p>
          </div>
        </div>

        <div className="flex h-auto flex-col overflow-hidden rounded-3xl border border-dark-gray/50 bg-white p-8 md:relative md:h-[30rem] lg:basis-1/3">
          <div className="order-1 md:order-none">
            <p className="mb-4 text-balance text-4xl">Compra cartas TCG</p>
            <p className="mb-4">
              Encuentra las cartas TCG que necesitas para completar tu colección
              o mejorar tu mazo. Nuestra plataforma te permite buscar y comprar
              cartas de otros usuarios de manera fácil y segura.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex h-auto flex-col justify-between overflow-hidden rounded-3xl border border-dark-gray/50 bg-white p-8 md:h-[30rem] lg:basis-1/3">
          <p className="mb-8 text-balance text-4xl md:mb-0">
            Gestiona tu inventario
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <CircleCheck className="size-5 h-lh shrink-0 rounded-full text-primary" />
              <p className="text-balance">
                Añadir, editar y eliminar cartas de tu inventario
              </p>
            </div>
            <div className="flex gap-4">
              <CircleCheck className="size-5 h-lh shrink-0 rounded-full text-primary" />
              <p className="text-balance">
                Añadir, editar y eliminar cartas de tu inventario
              </p>
            </div>
            <div className="flex gap-4">
              <CircleCheck className="size-5 h-lh shrink-0 rounded-full text-primary" />
              <p className="text-balance">
                Seguimiento de ventas y estadísticas de rendimiento
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-auto flex-col rounded-3xl border border-dark-gray/50 bg-white p-8 md:relative md:h-[30rem] lg:basis-2/3">
          <div className="order-1 md:order-none">
            <p className="text-balance text-4xl">Cobros y envíos</p>
            <p className="mt-4 md:absolute md:bottom-8 md:left-8 md:mt-0 md:w-1/2">
              Nuestra plataforma facilita el proceso de cobro y envío de tus
              cartas TCG. Puedes configurar métodos de pago seguros y opciones
              de envío para garantizar que tus clientes reciban sus cartas de
              manera rápida y segura.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-9 sm:flex-row">
        <div className="flex-1 rounded-3xl border border-dark-gray/50 bg-white p-8 md:h-[30rem] md:p-14">
          <div className="flex flex-col md:relative">
            <div className="order-1 mb-4 rounded-2xl border border-black bg-white px-4 py-4 sm:px-8 md:absolute md:top-[-1rem] md:left-0 md:order-none md:mb-0 sm:md:left-[-2rem]">
              <p className="m-0 font-medium text-xl">Soporte 24/7...</p>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-3xl border border-dark-gray/50 bg-white p-8 md:h-[30rem] md:p-14">
          <div className="flex h-full flex-col md:relative">
            <div className="order-1 mb-4 rounded-2xl border border-black bg-white px-6 py-4 sm:px-6 md:absolute md:bottom-1 md:order-none md:mb-0">
              <p className="m-0 font-medium text-xl">...y más</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
