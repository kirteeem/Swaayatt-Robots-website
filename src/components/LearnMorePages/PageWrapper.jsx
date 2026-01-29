export default function PageWrapper({ 
  children, 
  fullWidthOnMobile = false,
  mobilePadding = "px-4"   // ✅ default for all pages
}) {
  return (
    <div
      className={`
        w-full mx-auto max-w-[93vw]
        ${
          fullWidthOnMobile
            ? `
              px-0
              sm:px-10
              lg:px-16
            `
            : `
              ${mobilePadding}
              sm:px-12
              lg:px-16
            `
        }
      `}
    >
      {children}
    </div>
  );
}