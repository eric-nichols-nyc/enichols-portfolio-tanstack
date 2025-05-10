import { createFileRoute } from "@tanstack/react-router";
import ContentContainer from "@/components/content-container";
import VerticalEventTimeline from "@/components/experience";

export const Route = createFileRoute('/experience')({
  component: RouteComponent,
});

export default function RouteComponent() {
  return (
    <ContentContainer>
      <VerticalEventTimeline />
    </ContentContainer>
  );
}