export function ContainerFeedback({ children, id }: any) {
    return (
      <section
        id={id}
        className="
          h-full bg-FeedBackBg font-default
          p-8
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
  