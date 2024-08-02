import { useState } from "react";
import { Container, Button, Box} from "./apl.styled"

export default function Bagus() {
    const [lamp, sip] = useState(false)

    const Tombol = () => {
        sip (lamp === true ? false : true)
    }
    return (
        <>
        <Container ChangeBg={lamp} >
            <Box ChangeColor={lamp}></Box>
        <Button onClick={Tombol}>{lamp === false ? "gelap" : "terang"}</Button>
        </Container>
        </>
    )
}