import Link from 'next/link'

export default function TOCitem(props) {
    const destination = `/presentation/${props.tocItemInfo.frameStart}`

    return (
        <div className="card">
            <h2 className="title">{props.tocItemInfo.title}</h2>
            <p className="subtitle">Slide: {props.tocItemInfo.frameStart} - {props.tocItemInfo.frameEnd}</p>
            <p className="description">{props.tocItemInfo.description}</p>
            <Link href={destination}>
            <button className="btn">
                View Design
            </button>
            </Link>
        </div>

    )
}