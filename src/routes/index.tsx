import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => pageHead("en"),
});
