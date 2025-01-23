interface DestacarProps {
    children: React.ReactNode;
  }
  
  export default function Destacar({ children }: DestacarProps) {
    return <span className="text-[#92E880] font-medium">{children}</span>;
  }
  