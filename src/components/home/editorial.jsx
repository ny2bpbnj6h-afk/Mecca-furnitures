const editorialImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCgxdpY2YdN04Yz3v27Xfc8yZtfVadWHeoaL194ZWLCAWaM7fi1YPe3eRsmi7JS5yu_SWl4rLNc6kbtDGQVid2KBkRQ_AAezLKQaL40mPmBaT_6563_A4AwLbeNPlIJGutGUs2uUL3-COQvuNvZJ6DoIoyW1nI0j83AiUqrqehvIr5Js4EzNKJXbswRmKq8Y5fAIk7N0_avlGIar_krH2e60Uz48ET-MdE9o4xT7HRI_5UbzL3fBKty=s1920'

function Editorial() {
  return (
    <section className="w-full py-section-gap">
      <div className="mx-auto grid max-w-container-max grid-cols-1 lg:grid-cols-2">
        <div className="relative h-full min-h-[400px] w-full overflow-hidden">
          <img
            src={editorialImage}
            alt="A high-end living room with a curved oat sectional, dark wood coffee table, and large windows"
            className="h-full w-full object-cover object-top"
            loading="eager"
          />
        </div>
        <div className="flex h-full flex-col justify-center bg-surface-container-low p-margin-mobile md:p-margin-desktop lg:pl-24">
          <span className="mb-4 font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">
            Editorial View
          </span>
          <h2 className="mb-8 font-display-lg-mobile text-display-lg-mobile text-on-background md:font-display-lg md:text-display-lg">
            The Art of
            <br />
            Luxury Living
          </h2>
          <p className="mb-8 max-w-md font-body-lg text-body-lg text-on-surface-variant">
            Our latest collection redefines the living space. We blend
            architectural permanence with tactile comfort, creating
            environments that are as visually stunning as they are inviting.
            Discover pieces designed to anchor your home.
          </p>
          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded bg-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-colors duration-300 hover:bg-tertiary"
            >
              Read the Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Editorial
