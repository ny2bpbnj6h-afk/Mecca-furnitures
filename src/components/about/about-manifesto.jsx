import ManifestoText from './manifesto-text.jsx'
import ManifestoQuote from './manifesto-quote.jsx'

const artisanImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBdLyqmxD_oxQ_6vapooDzdoiFC8l3FdCajXOWbIwtgPU2BD0a53ZlV4V_Ui_nGBPXgWkKgPUaIa05urFeJ7VuPcdMcJhW2IJ3jXLj-MhEJxIFVGAZQa6uwH16muXIs9iVAY2oH5T0K1WRrJ2647FfrlUCcpvBKhHN166GU228rfO9GIhoOFEPyIHb-kuM4kIgPTy16-ejkLCUWQa9LBxx6QmF4kMlstFC5MJuLjK1NkDV9pBWU2V8p=s1920'

function AboutManifesto() {
  return (
    <section className="mx-auto w-full max-w-container-max overflow-visible px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="grid grid-cols-1 items-center gap-gutter overflow-visible md:grid-cols-12">
        <ManifestoText />

        <div className="relative order-1 md:order-2 md:col-span-6 md:col-start-7">
          <div className="aspect-[4/5] w-full overflow-hidden bg-surface-container shadow-[0_40px_80px_-20px_rgba(115,92,0,0.08)]">
            <img
              src={artisanImage}
              alt="A master artisan sanding the curved armrest of a bespoke wooden chair"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>
          <ManifestoQuote />
        </div>
      </div>
    </section>
  )
}

export default AboutManifesto
