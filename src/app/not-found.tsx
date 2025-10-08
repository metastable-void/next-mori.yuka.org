
import './not-found.css';

export default function NotFound() {
    const code = `
int main(void) {
    return *((int *) 0);
}
`;
    return <div id="error-404">
        <h1>404</h1>
        <pre>{code}</pre>
    </div>;
}
