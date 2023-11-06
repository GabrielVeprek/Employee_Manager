export function DataMask({text, data}) {
    return (
        <li className="list-group-item">
            <b> {text}: </b>
            {data}
        </li>
    )
}