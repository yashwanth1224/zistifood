export function Logo({
  className = "",
  variant = "transparent",
}: {
  className?: string;
  variant?: "transparent" | "original";
}) {
  return (
    <img
      src={variant === "original" ? "/logo.png" : "/logo-transparent.png"}
      alt="Zisti - Very Tasty"
      className={`inline-block object-contain select-none ${className}`}
    />
  );
}

export default Logo;
