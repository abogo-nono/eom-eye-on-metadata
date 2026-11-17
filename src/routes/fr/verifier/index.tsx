import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/case/shell";
import { CheckPage } from "@/components/case/pages";
import { checkHead } from "@/seo";
import { PAGES } from "@/site";

export const Route = createFileRoute("/fr/verifier/")({
  head: () => checkHead("fr"),
  component: () => (
    <Page alternates={PAGES.check}>
      <CheckPage />
    </Page>
  ),
});
