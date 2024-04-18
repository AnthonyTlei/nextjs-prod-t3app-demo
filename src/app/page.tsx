const mockUrls = [
  "https://utfs.io/f/b025e86e-c2c9-4d68-bc59-00f17c341394-jwy347.png",
  "https://utfs.io/f/566fbdda-1028-456d-9510-ee31d799aacd-j602l3.png",
  "https://utfs.io/f/d9949b85-1d1d-4f01-ab8b-42db7d6a1134-ld1eca.jpg",
  "https://utfs.io/f/1f1090d3-1bc8-437e-ba77-0f33096ad0ea-xyun8h.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} className="h-auto w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
