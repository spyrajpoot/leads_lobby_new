import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative h-24 w-24">
        <img 
          src="/final-logo.png"
          alt="Leads Lobby Logo" 
          className="h-full w-full object-contain"
        />
      </div>
      <div className="text-1xl font-bold -ml-3">
        <span className="text-[#1E88E5]">Leads</span>
        <span className="text-blue-950">Lobby</span>
      </div>
    </div>
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative h-24 w-24">
        <img 
          src="/final-logo.png"
          alt="Leads Lobby Logo" 
          className="h-full w-full object-contain"
        />
      </div>
      <div className="text-1xl font-bold -ml-3">
        <span className="text-[#1E88E5]">Leads</span>
        <span className="text-blue-950">Lobby</span>
      </div>
    </div>
  );
};