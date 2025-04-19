type Tree = (NodeTree | string)[];

type NodeTree = {
    title: string;
    tree: Tree;
    open?: boolean;
} | string;

function renderList(node: NodeTree) {
    const isString = typeof node === "string";

    if (isString) {
        return (
            <li key={node}>
                {node}
            </li>
        )
    } else {
        const { title, tree, open } = node;
        const hasMoreTree = tree && tree[0];

        return (
            <li>
                <details open={open} key={title}>
                    <summary>{title}</summary>
                    {
                        hasMoreTree && (
                            <ul>
                                {
                                    <RenderTree tree={tree} />
                                }
                            </ul>
                        )
                    }
                </details>
            </li>
        )
    }
}

function RenderTree({ tree }: { tree: Tree }) {
    return (
        <>
            {
                tree.map(renderList)
            }
        </>
    )
}

interface TreeViewConnectorProps {
    tree: Tree;
    className?: string;
    connector?: boolean;
}

export function TreeviewConnector({ tree, className = "" }: TreeViewConnectorProps) {
    return (
        <ul className={`tree-view ${className}`}>
            {
                <RenderTree tree={tree} />
            }
        </ul>
    )
}