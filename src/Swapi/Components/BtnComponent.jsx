import Button from "react-bootstrap/Button";

export function BtnComponent({text, onClick}) {
    return (
        <Button variant="secondary" onClick={onClick}>{text}</Button>
    )
}