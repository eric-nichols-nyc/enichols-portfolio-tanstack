import { createFileRoute } from "@tanstack/react-router";
import ContentContainer from "@/components/content-container";
import VerticalEventTimeline from "@/components/experience";
import Header from "@/components/header";

export const Route = createFileRoute('/experience')({
  component: RouteComponent,
});

export default function RouteComponent() {
  return (
    <ContentContainer>
      <Header
        title="My Developer Journey"
        subtitle="My journey through code, caffeine, and creativity"
      />
      <VerticalEventTimeline />
    </ContentContainer>
  );
}