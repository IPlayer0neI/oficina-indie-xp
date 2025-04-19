import { BuyArea } from "../BuyComponents/BuyArea/BuyArea"
import { Tab } from "../Windows7Components/Tab/Tab"
import { Window } from "../Windows7Components/Window/Window"
import { Benefit } from "./Benefit/Benefit"
import styles from "./index.module.css"

export function CourseBuyArea() {
    return (
        <div className={styles.purchaseOverviewContainer}>
            <Window
                windowText="Compre AGORA!!!"
                innerWindowClassName={styles.innerWindow}
                className={styles.purchaseOverview}
                location={["Oficina indie", "benefícios"]}
            >
                <div className={styles.benefitsArea}>
                    <Tab
                        items={[
                            {
                                title: "15 DIAS DE TESTE",
                                content: (
                                    <Benefit title="15 DIAS DE TESTE" imgName="number-15.png">
                                        Experimente o curso por 15 dias. Se você não gostar, ou não achar que é pra você, garantimos seu dinheiro de volta com reembolso integral! Fique à vontade para testar o curso sem compromissos.
                                    </Benefit>
                                )
                            },
                            {
                                title: "ACESSO VITALÍCIO",
                                content: (
                                    <Benefit title="ACESSO VITALÍCIO" imgName="forever_1_-_1_.webp">
                                        Você só precisa comprar o curso uma única vez para receber acesso vitalício à plataforma e ao grupo do discord. Dessa forma, você terá acesso a qualquer conteúdo novo que for lançado no futuro.
                                    </Benefit>
                                )
                            }
                        ]}
                    />
                </div>
                <BuyArea />
            </Window>
        </div>
    )
}