export function TransitionLogo() {
  return (
    <img
      src="../src/images/rs3_logo.png"
      className="
        hidden lg:flex
        fixed top-4 right-0 
        transition-all transform duration-700 hover:hue-rotate-180
        px-8 py-2
        md:px-12
        lg:px-24 
        xl:px-44
        2xl:px-64
      "
    />
  );
}
