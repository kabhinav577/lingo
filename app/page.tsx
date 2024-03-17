import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="text-3xl flex flex-col space-y-4 my-8 justify-center items-center">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">Primary</Button>
      <Button variant="secondaryOutline">Primary Outline</Button>
      <Button variant="danger">Primary</Button>
      <Button variant="dangerOutline">Primary Outline</Button>
      <Button variant="super">Primary</Button>
      <Button variant="superOutline">Primary Outline</Button>
      <Button variant="ghost">Primary Outline</Button>
      <Button variant="sidebar">Primary</Button>
      <Button variant="sidebarOutline">Primary Outline</Button>
    </div>
  );
}
