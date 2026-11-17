import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/case/shell";
import { GuidesIndexPage } from "@/components/case/pages";
import { guidesHead } from "@/seo";
import { PAGES } from "@/site";

export const Route = createFileRoute("/guides/")({
  head: () => guidesHead("en"),
  component: () => (
    <Page alternates={PAGES.guides}>
      <GuidesIndexPage />
    </Page>
  ),
});
