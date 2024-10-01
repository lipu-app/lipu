import { usePageContext } from 'vike-react/usePageContext';

export function Page() {
    const pageContext = usePageContext();
    if (pageContext.is404) {
        return <p>404 Not Found</p>;
    }
    return <p>Unknown error</p>
}
