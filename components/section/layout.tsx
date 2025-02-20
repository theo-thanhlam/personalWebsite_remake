import React from "react";

const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto w-full p-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[85px_1fr] items-start gap-x-6 gap-y-4 py-0  -mt-4 text-zinc-200 font-mono">
      {children}
    </section>
  );
};

export default SectionLayout;
