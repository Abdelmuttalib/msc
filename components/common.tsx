import { cn } from "@/lib/utils";
import { Typography } from "./ui/typography";

export function LogoText({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xl font-semibold tracking-tighter font-sans",
        className
      )}
      {...props}
    >
      MSC
    </p>
  );
}

export function SectionTag({ id, className, ...props }: SectionProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="size-3 bg-[#a6ff79]"></div>
      <Typography
        variant="sm/normal"
        className={cn("uppercase", className)}
        id={id}
        {...props}
      />
    </div>
  );
}

type SectionProps = {
  id?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Section({ id, className, ...props }: SectionProps) {
  return (
    <section
      id={id || ""}
      className={cn("bg-white py-20 sm:py-28 lg:py-36", className)}
      {...props}
    />
  );
}
