import shopProducts from '../shop/shop-products-data.js'

const categoryImages = {
  'Sofas & Sectionals': {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAg8imfnW4sfjiggja3WehqY_hTDesTly0xLaTEstPNgy2e_VLUPw9ODk5YJA70e8dIi1BcsyjgVUtRtWgQuaCqzmSIBBZpUFHPdtvBHdPokQJCQklRsIXmWEzMpM1Xrv-pc0tyQEA3dvIl5kf-hTZ7taLjtn-MyhlliQIFBYD7kIf7n0oiOZC9uPItRx33xAg7nyUqry9ExNr2wwsgGQzc48_QFRRP0OQWOyIm7QftvlfwwhO8TgC-=s1920',
    alt: 'A deep emerald green velvet sofa in a minimalist, airy room',
  },
  'Accent Chairs': {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcrVVJoOA5HUFG4Vf-7MOoPfpvRI73teErWjRS6s0pY0Mihn_cGcHQVO3z71uMDTAwr1GM5l4SrCZZZKuHq6-eyfSynw51u-v28uwBdZzDkrmJeWeE81xliRccsQhwk_MRwEACVWrEPshdIYg5czpeaGflrk5lljFR02bMlVGPrqIFQ36F8mD5xsSN4eo2X9Ne2GbW_dd8SUY5RA_ngPiZCZsSADysXnXvQHVXY7CNaleQ0gAQfdbz=s1920',
    alt: 'An elegant curved accent chair upholstered in light bouclé fabric',
  },
  'Beds & Frames': {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAmG_VKzY-sfR6cV_MxoHmm3R4pNudJfCnMFpFA5qImUZ1JYLdZIvljh4QJMb4xKXC2PjCxBdg9MhCG5LUumnUD5s-J8JDTJkHyx7ZgG31xDRNFhY9oBLlEoMQGj4-nkIzOW5eMGkcVj3jAtyBW82Lq88ee3Mdn2wUUHOSfp9doT5gSz9gV1zjDcig3PFk4e53XiTS9_rwDAClyS-u3ewW8kslGuS4awCkud3Z7GJc_5NUF9yQ1xDT7=s1920',
    alt: 'A minimalist solid oak bed frame in a bright, tranquil bedroom',
  },
  'Dining Tables': {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5WkqMMfy7SwApdRr4-CDiTEq9HurNLsusdP8-Ij4QSmdJneN4BI_1mThYSluXm2_tXvE_aVde45243Uo7cwXBUgeZq6R2A8aioSh-525ZCDdz2QczT0PxF2bV_51xCEb4tpK2NBI5ZUNP2VqBB60xDQFf3A-GJECsDksMON8IVKswPj_qoQjf9Qtva9b50jT-ygzF21Hn7xAyv-QLEpsnSerZR8kSTY3L4HhR5qOnuGy_WWumQMYF=s1920',
    alt: 'A grand dark walnut dining table in a light-filled dining room',
  },
  Lighting: {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASyJnrt046tG0eibCQwRGI581nrukhDI96-6zDYPpYNl4d9D6QT5DaVWqhwpCcatyccCArpSAuJkvgALJgCwuej4QEjh9Wd6Wfyw7YzEcYuLr14xXTIloYd6f_QX8sAsBylY7edY_f0qQg8x3ZH3pqt_98klH-NejiBhJximc_Wbr40ktNqOQdOT5zT3uf4Ulh7LHEKu1xuL7VVUm-DRpXJnPk6CKQh3mBapUj7S3-K_ISwFKHpn-c=s1920',
    alt: 'A chandelier with asymmetrical brushed brass arms and frosted glass globes',
  },
  'Mirrors & Decor': {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAr5oZ0EMsdM-BOcX0FxHRZ6_Fpnx-uXQ9RgKz_3RBFKYCKkeYR8E_NarMaYnNRi0tfSmyIEjAI2lV2aqqJ0NoDRE5Ywf5tJtSWmHcgMf2ezbIOr-MTlcP9t4vdSpHPGMNeXt8D0nhgDhH9H4HZNv7ZHwOZH3T41Lq7zoygK32QwY6wZJXuuFD3OdezpxDWJ3PV-CjC1WLA3gCrB7UzTYfWNjcl6RggCYxFYBkUorwbf6cyBiKjgaC6=s1920',
    alt: 'An arch-shaped floor mirror with a thin brass frame in a sunlit room',
  },
  'Storage & Sideboards': {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpM7XrO6KkUZRBD9MlKktydL7Q-xTGzuzeQ688bHixm2cgOHRc64sX1-3k7XEYLCwYmMRCYqet45plSq9sHLM71pip50Sai8GBMpOqZaotzAvDJg0VDCZoYdEKgDTOKSA5bK2SZCGBwmizoP0Mb5tnPvC6ca03VqjbQ_Ka6JCyKX_XGXInpLDJe7D64Cne-xpwYNvjz_PGDRPNjl5-j0w1txLH-PZV1fRvalzKke2GlZjMaSPL-A3s=s1920',
    alt: 'A sleek wooden sideboard with clean lines and subtle brass hardware',
  },
  'Coffee Tables': {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCx55RKtlEBPhHkYGokBTPEce26VKPmIApC6bJiwqv9AyJqks18UFEqRBk0gx3_dy9zbQQPDp_k1KN13M8EioNkhoe06M_9pBT5HFyk88cXrIptoSF0WbgU1uxNGdrIpbG4AugP35ZQnJ93a32gdePevj1OjAjdFgPEqpOjbqiyPzHRG6Htkac1RgHPvZq9cYst4cES0LeyiY6Q4ARFSal5aDADT5xxpTq1yvWoCCXMhRTVoLJauY0m=s1920',
    alt: 'A low-profile stone coffee table in beige travertine with natural veining',
  },
}

const categories = Object.entries(categoryImages).map(([name, img]) => ({
  name,
  count: shopProducts.filter((p) => p.category === name).length,
  slug: name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'),
  ...img,
}))

export default categories
