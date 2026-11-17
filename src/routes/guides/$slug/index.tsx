import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute, guideKeyFor } from "@/components/case/guide-route";
import { guideHead } from "@/seo";

export const Route = createFileRoute("/guides/$slug/")({
  loader: ({ params }) => ({ key: guideKeyFor("en", params.slug) }),
  head: ({ loaderData }) => (loaderData ? guideHead("en", loaderData.key) : {}),
  component: function EnGuide() {
    const { key } = Route.useLoaderData();
    return <GuideRoute guideKey={key} />;
  },
});
