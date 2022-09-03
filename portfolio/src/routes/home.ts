import * as prismic from "@prismicio/client"

export async function GET({ params }: { [key: string]: any }) {

    const repositoryName = "yoshua-portfolio";
    const client = prismic.createClient(repositoryName);
    const document = await client.getByUID('home', 'home', { fetchLinks: 'project_page.body' });

    if (document) {
        return {
            body: { document }
        };
    }

    return {
        status: 404
    };
}