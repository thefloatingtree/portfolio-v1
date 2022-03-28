interface Props {
    children: React.ReactNode,
    color?: string,
    onClick?: Function
}

const colorLookup: Record<string, string> = {
    'ghost': "text-prussian-blue hover:bg-black hover:bg-opacity-5",
    'red': "text-white bg-imperial-red"
}

export default function Button({ children, color = "ghost", onClick = () => {} }: Props) {
  return (
    <button onClick={(e) => onClick(e)} className={colorLookup[color] + " font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 outline-none cursor-pointer transition-all w-full"}>{children}</button>
  )
}
