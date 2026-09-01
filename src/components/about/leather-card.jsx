import ImageCard from './image-card.jsx'

const leatherImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDc4vvI1I-y6Yvik3EpKmRB_1aoP83MOsGlsB094-Ln2tE5ftd5MyMBx4DNGMndJ5pgrCgxY8cmrR9_r7NT3rBfzk9_w6BfXl8GRDAWCKDBOqDHGGMuPlo0kqqd4yMNO6oI322Gnw7qHxmbMkDjkyevefaTxuExA74d43dAtsUsgWtn7RRBoMRqkym7lpICKJX73a0hhDtQ37JnFXez-qsNgCD8R1lBUjZUdreZGeCfPPi8F9UZoBdb=s1920'

function LeatherCard() {
  return (
    <ImageCard
      image={leatherImage}
      alt="Full-grain Italian leather draped over a minimalist brass frame"
      overlayClass="bg-primary/40 transition-colors duration-300 group-hover:bg-primary/50"
      contentClass="inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <span className="material-symbols-outlined text-4xl text-secondary-fixed">
        recycling
      </span>
      <h3 className="font-headline-md text-headline-md text-on-primary">
        Vegetable-Tanned Leathers
      </h3>
    </ImageCard>
  )
}

export default LeatherCard
