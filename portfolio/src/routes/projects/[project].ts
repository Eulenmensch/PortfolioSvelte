import * as prismic from "@prismicio/client"

export async function GET({ params }) {

    const repositoryName = "yoshua-portfolio";
    const client = prismic.createClient(repositoryName);
    const document = await client.getByUID("project_page", params.project);

    if (document) {
        return {
            body: { document }
        };
    }

    return {
        status: 404
    };
}