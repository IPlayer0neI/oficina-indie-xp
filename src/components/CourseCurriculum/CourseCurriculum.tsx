import { BuyButton } from "../BuyComponents/BuyButton/BuyButton"
import { TreeviewConnector } from "../Windows7Components/TreeviewConnector/TreeviewConnector"
import { Window } from "../Windows7Components/Window/Window"
import styles from "./index.module.css"

const courseModules = [
    {
        title: "Módulo 1: Introdução à Programação",
        tree: [
            "Instalando a Unity",
            "Variáveis e Operações Aritméticas",
            "Estruturas Condicionais",
            "Elementos de UI",
            "Criando um simulador de Pedra, Papel e Tesoura"
        ]
    },
    {
        title: "Módulo 2: Top Down RPG",
        tree: [
            "Movimentação de Personagem",
            "Inimigos Simples",
            "Mecânica de Combate",
            "Inventário",
            "Dinheiro e Loja",
            "Inimigos Complexos",
            "Mecânica de Level Up",
            "Gráficos e Tilemaps",
            "Animação 2D",
            "Sistema de Particulas",
            "Efeitos Sonoros",
            "Polimento e Pós-Processamento",
            "Opções e Save Game"
        ]
    },
    {
        title: "Módulo 3: Recriando Jogos Clássicos",
        tree: [
            "Flappy Bird",
            "Super Mario",
            "Pong",
            "Space Invaders",
            "Frogger",
            "Breakout",
            "Vampire Survivors"
        ]
    },
    {
        title: "Módulo 4: Programação Intermediária e Avançada",
        tree: [
            " Estruturas em Loop",
            "Arrays e Listas",
            "Padrões de programação",
            "Save Game por arquivos de texto"
        ]
    },
    {
        title: "Módulo 5: Tower Defense",
        tree: [
            "Inimigos e Movimentação em Trilhos",
            "HUD e UI",
            "Sistema de Waves",
            "Torres e Construção"
        ]
    },
    {
        title: "Módulo 6: Terror e FPS",
        tree: [
            "3D e Movimentação em Primeira Pessoa",
            "Inimigo e Navegação",
            "Objetivos, Vitória e Derrota",
            "Gráficos e Animação",
            "Mecânica de Tiro (Recarregar, Trocar e Headshot)",
            "Polimento"
        ]
    },
    {
        title: "Módulo 7: Game Design",
        tree: [
            " Teoria de Cores",
            "Padrões de UI",
            "Estilos de jogos: O que vende x O que não vende",
            " GDD: Documento de Design de Jogos",
            "Ferramentas de Organização",
            "Trabalhando em Equipe"
        ]
    },
    {
        title: "Módulo 8:  Publicando seu Jogo",
        tree: [
            " Publicando no itch.io",
            "Publicando na Steam",
            "Marketing: Como ter um canal de sucesso no Youtube",
            "Marketing: Youtube, Redes Sociais e Influencers",
            "Finanças: Como pagar menos impostos"
        ]
    }
]

export function CurriculumList() {
    return (
        <div className={styles.curriculumListContainer}>
            <Window 
            className={styles.curriculumList} 
            innerWindowClassName={styles.innerWindow}
            location={["Oficina indie", "currículo"]}
            windowText="Nosso currículo"
            >
                <h2 className={`textShine ${styles.curriculumListTitle}`} >
                    Conheça a jornada da Oficina Indie
                </h2>
                {
                    <TreeviewConnector connector={false} className={styles.treeClass} tree={courseModules}/>
                }
                <div className={styles.buttonStyle}>
                    <BuyButton />
                </div>
            </Window>
        </div >
    )
}