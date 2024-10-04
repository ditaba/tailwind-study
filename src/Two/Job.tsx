import { ReactNode } from "react";

export interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({ title, icon, bgClass }) => {
  return (
    <div
      className={`flex flex-col items-center ${bgClass} aspect-square justify-center rounded-lg border`}
    >
      {icon}
      <span className="pt-2 font-popi">{title}</span>
    </div>
  );
};
