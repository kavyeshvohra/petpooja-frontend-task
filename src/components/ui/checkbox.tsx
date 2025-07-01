import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import Check from "../../assets/icons/check.svg";
import { cn } from "../../lib/utils";

export const Checkbox = ({
  checked,
  onCheckedChange,
  className = "",
}: {
  checked: boolean;
  onCheckedChange: () => void;
  className?: string;
}) => (
  <CheckboxPrimitive.Root
    className={cn(
      `group h-6 w-6 border-2 border-black rounded-full flex items-center justify-center transition-colors hover:border-transparent hover:bg-successbg`,
      checked ? "border-transparent" : "bg-white",
      className
    )}
    checked={checked}
    onCheckedChange={onCheckedChange}
  >
    <CheckboxPrimitive.Indicator forceMount>
      <Check
        className={cn(
          "h-4 w-4 text-green-700",
          !checked && "opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        )}
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);
