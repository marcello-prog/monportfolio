interface TitleProps {
  title : string
}
const Title = ({title} : TitleProps) => {
  return (
    <h1 className="uppercase font-bold mb-14 mt-14 text-center text-3xl">
      {title}
    </h1>
  )
}

export default Title