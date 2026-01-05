export default function PageContainer({ children }) {
  return (
    <div className="w-full  ">
      <div className="mx-auto  max-w-[93vw]">
        {children}
      </div>
    </div>
  );
}
