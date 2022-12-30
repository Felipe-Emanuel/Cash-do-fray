export function ContainerLigth({children, id}: any) {
    return (
      <section
        id={id}
        className="
        overflow-hidden
              h-full bg-white font-default
              px-8 py-2
              md:px-12
              lg:px-24 
              xl:px-44
              2xl:px-64
          "
      >
        {children}
      </section>
    );
  }