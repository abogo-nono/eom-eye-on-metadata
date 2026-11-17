import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/case/shell";
import { HomePage } from "@/components/case/home";
import { homeHead } from "@/seo";
import { PAGES } from "@/site";

export const Route = createFileRoute("/fr/")({
  head: () => homeHead("fr"),
  component: () => (
    <Page alternates={PAGES.home}>
      <HomePage />
    </Page>
  ),
});
