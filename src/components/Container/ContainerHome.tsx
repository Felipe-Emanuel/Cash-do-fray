export function ContainerHome({ children, id }: any) {
  return (
    <section
      id={id}
      className="
        h-full bg-PrimaryColor bg-center bg-cover text-white font-default
        px-8 py-2
        md:px-12
        lg:px-24 
        xl:px-44 lg:bg-HomeBg lg:h-screen
        2xl:px-64
    "
    >
      {children}
    </section>
  );
}
