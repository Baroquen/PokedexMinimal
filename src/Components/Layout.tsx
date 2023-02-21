import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"

export const Layout: FC = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}