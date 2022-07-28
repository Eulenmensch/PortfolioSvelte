import * as prismic from "@prismicio/client"

export async function GET() {

    const repositoryName = "yoshua-portfolio";
    const client = prismic.createClient(repositoryName);
    const document = await client.getByUID("project_page", "hoversword");

    if (document) {
        return {
            body: { document }
        };
    }

    return {
        status: 404
    };
}