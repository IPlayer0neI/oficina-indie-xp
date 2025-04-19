import { BuyArea } from "../BuyComponents/BuyArea/BuyArea"
import { TreeviewConnector } from "../Windows7Components/TreeviewConnector/TreeviewConnector"
import { Window } from "../Windows7Components/Window/Window"
import styles from "./index.module.css"

const tree = [{
    title: " Quando acontece e como ????",
    open: true,
    tree: [
        "A Oficina Jam acontece todo mês na nossa comunidade do Discord.",
        "Os alunos tem 48 horas para produzir um jogo curto,",
        "mas criativo, baseado em um tema sorteado.",
        {
            title: " Caramba!!! O Que mais????",
            open: true,
            tree: [
                "Além de ser uma ótima oportunidade de aprendizado,",
                "os vencedores ainda levam um prêmio de R$300,00!",
                {
                    title: "Mas sei lá... É Muito difícil e eu não tenho amigos....",
                    open: true,
                    tree: [
                        "Forme equipes com outros alunos, ou faça seu projeto sozinho,",
                        "você escolhe como aplicar tudo que está aprendendo no curso",
                        "para adicionar um jogo autoral completo ao seu portfólio."
                    ]
                }
            ]
        }
    ]
}]

export function CourseGameJam() {
    return (
        <div className={styles.buyGameJamContainer}>
            <Window 
            className={styles.buyGameJam} 
            innerWindowClassName={styles.innerWindow}
            location={["Oficina indie", "game jam"]}
            windowText="Game jam"
            >
                <div className={styles.gameJam}>
                    <div className={styles.gameJamImg}>
                        <div className={styles.imgContainer}>
                            <img src="assets/various/oficina-jam-1.webp" />
                        </div>
                    </div>
                    <div className={styles.gameJamDescription}>
                        <h2 className={`textShine ${styles.gameJamDescriptionTitle}`}>
                            Ganhe prêmios em dinheiro com nossas Game Jams!
                        </h2>
                        <TreeviewConnector tree={tree} />
                    </div>
                </div>
                <div className={styles.buyAreaContainer}>
                    <BuyArea />
                </div>
            </Window>
        </div >
    )
}