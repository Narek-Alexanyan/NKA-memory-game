export const CardCrystals = () => {
  return (
    <div className="relative w-22 h-22">
      <img
        src="/images/easy-crystal.jpeg"
        alt="easy-crystal"
        className="w-22 h-22 rounded-lg border-4 border-amber-50 rotate-y-30 -rotate-z-30 absolute bottom-2 left-0 z-20"
      />
      <img
        src="/images/medium-crystal.jpeg"
        alt="medium-crystal"
        className="w-22 h-22 rounded-lg border-4 border-amber-50 rotate-y-25 -rotate-z-20 absolute bottom-2 left-[20px] z-10"
      />
      <img
        src="/images/hard-crystal.jpeg"
        alt="hard-crystal"
        className="w-22 h-22 rounded-lg border-4 border-amber-50 rotate-y-25 -rotate-z-10 absolute bottom-2 left-[40px] z-0"
      />
    </div>
  );
};
