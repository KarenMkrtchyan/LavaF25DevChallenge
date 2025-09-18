interface MyComponentProps {
  name: string
  pic: string
}

export default function ProductDescription({ name, pic }: MyComponentProps) {

    return (
    <div>
        <div>
            <img src={pic} alt={name} />
        </div>
        <div>
            <h2>{name}</h2>
        </div>
    </div>
    )
}