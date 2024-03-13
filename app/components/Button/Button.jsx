const Button = ({ children, variant, size, onClick }) => {
  let buttonClasses = "button ";
  if (variant === "contained") {
    buttonClasses +=
      "bg-primary whitespace-nowrap capitalize rounded-[28px] px-[16px] py-[10px] hover:text-white hover:bg-primary-light text-white text-[14px]";
  } else if (variant === "outline") {
    buttonClasses +=
      "border rounded-[28px] whitespace-nowrap capitalize px-[16px] py-[10px] border-primary text-blue-500 hover:text-white hover:bg-primary text-[14px]";
  }
  if (size === "small") {
    buttonClasses += "text-sm px-3 py-1 ";
  } else if (size === "large") {
    buttonClasses += "text-lg px-6 py-3 w-full ";
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
