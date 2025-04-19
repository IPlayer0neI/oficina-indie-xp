import { Card } from "./Card/Card"
import styles from "./index.module.css"

export function CourseContent() {
    return (
        <div className={styles.summaryContentContainer}>
            <div className={styles.cardsContainer}>
                <Card
                    imgName="csharp.webp"
                    title="Programação em C#"
                    style={{
                        position: "relative",
                        bottom: "-40px"
                    }}
                    contentPathName="programação"
                >
                    Aprenda a programar do zero ao avançado, <br/>
                    sem precisar ter conhecimentos prévios.
                </Card>
                <Card
                    imgName="arte-game-design.webp"
                    title="	Arte"
                    style={{
                        position: "relative",
                        left: "-20px"
                    }}
                    contentPathName="arte"
                >
                    Aprenda as fundações de design gráfico, arte 2D,<br/>
                    sound design, e composição de músicas.
                </Card>
                <Card
                    imgName="unity.webp"
                    title="Unity 2D e 3D"
                    style={{
                        position: "relative",
                        bottom: "-40px"
                    }}
                    contentPathName="unity"
                >
                    Com a Unity, a engine de criação de jogos mais usada<br/>
                    do mercado profissional, faremos jogos 2D e 3D.
                </Card>
                <Card
                    imgName="marketing-financas.webp"
                    title="Marketing e Finanças"
                    style={{
                        position: "relative",
                        left: "-10px"
                    }}
                    contentPathName="marketing e finanças"
                >
                    Entenda como divulgar seu jogo, e como<br/>
                    cuidar da parte financeira de seu jogo.
                </Card>
            </div>
        </div>
    )
}