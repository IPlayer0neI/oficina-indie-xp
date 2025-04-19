import { ReactElement, useState } from "react";

interface Items {
    title: string;
    content: ReactElement;
}

interface TabProps {
    items: Items[];
}


export function Tab({ items }: TabProps) {
    const [actived, setActived] = useState(0);

    return (
        <section className="tabs">
            <menu role="tablist" aria-label="Tabs Template">
                {
                    items.map(function ({ title }: Items, index) {
                        return (
                            <button
                                key={title}
                                onClick={() => setActived(index)}
                                role="tab"
                                aria-controls={"tab-" + title}
                                aria-selected={index == actived ? "true" : "false"}>
                                {title}
                            </button>
                        )
                    })
                }
            </menu>
            {
                items.map(function ({ title, content }: Items, index) {
                    return (
                        <article role="tabpanel" id={`tab-${title}`} key={title} hidden={index == actived ? false : true}>
                            {content}
                        </article>
                    )
                })
            }
        </section>
    )
}