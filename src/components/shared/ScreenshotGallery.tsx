import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import type { Screenshot } from "@/types/project";

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

export function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  return (
    <div className="space-y-12">
      {screenshots.map((shot) => (
        <div key={shot.title} className="space-y-3">
          <Dialog>
            <DialogTrigger
              render={
                <div className="rounded-lg overflow-hidden border border-border flex justify-center bg-muted/20 cursor-zoom-in hover:opacity-90 transition-opacity">
                  <img
                    src={shot.imageUrl}
                    alt={shot.title}
                    className="max-w-full h-auto"
                  />
                </div>
              }
            />
            <DialogContent className="sm:max-w-5xl max-w-[calc(100%-2rem)] p-2 bg-background/95 border-border">
              <img
                src={shot.imageUrl}
                alt={shot.title}
                className="w-full h-auto rounded-md"
              />
            </DialogContent>
          </Dialog>

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