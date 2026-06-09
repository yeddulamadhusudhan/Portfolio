export default function BackgroundGlow() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[140px]" />

        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[140px]" />
      </div>
    </>
  );
}