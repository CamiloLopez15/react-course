export default function FirstApp({
    title,
    subTitle,
}: {
    title: string;
    subTitle: string;
}) {
    console.log({ title, subTitle });

    return (
        <>
            <h1>First App</h1>
            <p>Hola mundo</p>
        </>
    );
}
