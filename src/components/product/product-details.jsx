function ProductDetails({ product }) {
  const sections = [
    { title: 'Materials & Craftsmanship', body: product.materials },
    { title: 'Shipping & Delivery', body: product.shipping },
  ]
  return (
    <section className="mt-16 border-t border-outline-variant">
      {sections.map((section, index) => (
        <details
          key={section.title}
          open={index === 0}
          className="group border-b border-outline-variant py-6"
        >
          <summary className="flex list-none cursor-pointer items-center justify-between font-headline-md text-headline-md text-primary">
            {section.title}
            <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
            {section.body}
          </p>
        </details>
      ))}
    </section>
  )
}

export default ProductDetails
