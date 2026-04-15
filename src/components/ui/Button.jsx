import { cn } from "../../lib/cn"

const Button = ({ className, onClick, ...children }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-[#002d2e] text-white py-2 px-4 rounded-full hover:bg-[#002d2e]/95 transition-colors duration-200",
        className,
      )}
    >
      {...children}
    </button>
  )
}

export default Button
