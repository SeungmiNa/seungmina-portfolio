import React from 'react';
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hello! I'm Seungmi Na, a passionate UX/UI designer dedicated to creating 
        beautiful and user-friendly digital experiences.
      </p>
      <Button>Click me</Button>
    </div>
  );
};

export default AboutPage;
