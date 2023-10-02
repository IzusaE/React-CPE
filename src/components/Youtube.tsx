export default function Youtube({ url }: { url: string }) {
    return <iframe title={url} src={url}></iframe>;
}
