import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute, guideKeyFor } from "@/components/case/guide-route";
import { guideHead } from "@/seo";

export const Route = createFileRoute("/fr/guides/$slug/")({
  loader: ({ params }) => ({ key: guideKeyFor("fr", params.slug) }),
  head: ({ loaderData }) => (loaderData ? guideHead("fr", loaderData.key) : {}),
  component: function FrGuide() {
    const { key } = Route.useLoaderData();
    return <GuideRoute guideKey={key} />;
  },
});
