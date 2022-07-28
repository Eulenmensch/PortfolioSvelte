/**
 * This action triggers a custom event on node entering/exiting the viewport.
 * example:
 * <p
 * 	use:inView
 * 	on:enter={() => console.log("enter")}
 * 	on:exit={() => console.log("exit")}
 * >
 * 
 * slightly confusing source, that also creates a bunch of warnings in vscode but somehow works
 * https://medium.com/mkdir-awesome/how-to-animate-a-svelte-component-when-it-comes-into-view-f6cd0efb3b60
 */

export default function inView(node: Element, params = {}) {
    let observer: IntersectionObserver;

    const handleIntersect = (e: { isIntersecting: any; }[]) => {
        const v = e[0].isIntersecting ? "enter" : "exit";
        node.dispatchEvent(new CustomEvent(v));
    };

    const setObserver = ({ root, threshold }) => {
        const options = { root, threshold };
        if (observer) observer.disconnect();
        observer = new IntersectionObserver(handleIntersect, options);;
        observer.observe(node);
    }

    setObserver(params);

    return {
        update(params: { root: any; threshold: any; }) {
            setObserver(params);
        },

        destroy() {
            if (observer) observer.disconnect();
        }
    };
}