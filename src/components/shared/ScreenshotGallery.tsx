import type { Screenshot } from "@/types/project";

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

export function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  return (
    <div className="space-y-12">
      {screenshots.map((shot) => (
        <div key={shot.title} className="space-y-3">
          <div className="rounded-lg overflow-hidden border border-border flex justify-center bg-muted/20">
            <img
              src={shot.imageUrl}
              alt={shot.title}
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <h3 className="font-mono text-sm text-primary mb-1">{shot.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {shot.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}