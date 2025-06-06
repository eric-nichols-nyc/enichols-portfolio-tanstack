import { createFileRoute } from '@tanstack/react-router';
import ContentContainer from '@/components/content-container';
import TechComponent from '@/components/tech';

export const Route = createFileRoute('/tech')({
  component: TechPage,
});

export default function TechPage() {
  return (
    <ContentContainer>
      <TechComponent />
    </ContentContainer>
  );
} 