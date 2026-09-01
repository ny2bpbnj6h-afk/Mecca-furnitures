import ImageCard from './image-card.jsx'

const timberImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBB_rGPVqvlLkm5mzPasjd08-gS-u38KVw3XxxLtVFg3e5227vccGKbXskbTqpvE35Kxe2QTBOFQFerLzT61nt4ur5Lw8Z-iUpn4GY4ceiRZ2tzhasYA2datDqJHHVQ2QwcXR2VxekPWXC5_zSYaa7HoTF-1m4iLDXBlwv-KjS38zf29WFcxFZvbudoO2rg4rLuDvf6ajWZFgKw1R-3DkZ9cEKhdeuyjiBFUJXU4-AmfRv7Vgo0ucxe=s1920'

function TimberCard() {
  return (
    <ImageCard
      className="md:col-span-2"
      image={timberImage}
      alt="Sustainably harvested timber logs in a bright lumber yard"
      overlayClass="bg-linear-to-t from-primary/80 via-primary/20 to-transparent"
      contentClass="bottom-0 left-0 flex flex-col gap-3 p-8"
    >
      <h3 className="font-headline-md text-headline-md text-on-primary">
        Responsibly Harvested Timber
      </h3>
      <p className="max-w-md font-body-md text-body-md text-on-primary/90">
        We partner exclusively with FSC-certified forests, ensuring that every
        piece of walnut, oak, and ash contributes to ecological renewal.
      </p>
    </ImageCard>
  )
}

export default TimberCard
