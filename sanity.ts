import {createClient} from "@sanity/client";

export const client = createClient({
    projectId: 'ax0xu463',
    dataset: 'production',
    apiVersion: '2026-03-24',
    useCdn: true,
})