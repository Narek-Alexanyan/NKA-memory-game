interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      <img src="/images/crystal.png" className="w-6 h-6" alt="crystal" />
      <p className="text-2xl">{children}</p>
      <img src="/images/crystal.png" className="w-6 h-6" alt="crystal" />
    </button>
  );
};
