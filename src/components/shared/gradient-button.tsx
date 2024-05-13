
import { cn } from "@/lib/utils"

const GradientButton = ({content,onClick,className,disabled}:{
    content:string,onClick?:React.MouseEventHandler<HTMLButtonElement>,className:string,disabled:boolean
}) => {
  return (
    <button
    className={cn("px-6 py-3 text-white font-bold  rounded-md transition duration-300 ease-in-out bg-gradient-to-r from-red-500 via-green-500 to-blue-500 hover:from-pink-500 hover:via-yellow-500 hover:to-purple-500 hover:shadow-lg",className)}
      onClick={onClick} disabled={disabled}
      >
    {content}
    </button>
  );
}

export default GradientButton;
