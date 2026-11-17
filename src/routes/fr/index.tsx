import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/fr/")({
  component: LandingPage,
  head: () => pageHead("fr"),
});
