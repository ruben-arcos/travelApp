import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    // if add ? for optional icon
    icon?: string;
    variant: 'btn_dark_green'
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button 
    className={`flexCenter gap-3 rounded-full border ${variant}`}
        type={type}
    >
      Login  {icon && <Image src={icon} alt={title} width={24} height={24}  />}
    </button>
  )
}

export default Button