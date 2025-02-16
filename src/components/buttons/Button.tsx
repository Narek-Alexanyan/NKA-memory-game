interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="w-full bg-grape inline-flex items-center justify-between p-4 gap-4 rounded-full transition-colors uppercase hover:bg-slate-blue cursor-pointer">
      <img src="/images/crystal.png" className="w-6 h-6" alt="crystal" />
      <p className="text-2xl">{children}</p>
      <img src="/images/crystal.png" className="w-6 h-6" alt="crystal" />
    </button>
  );
};
