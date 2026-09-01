import { useCart } from './cart-context.js'

function CartSummary() {
  const { total } = useCart()
  const formattedTotal = `$${total.toLocaleString()}`
  return (
    <div className="mt-12 lg:col-span-4 lg:mt-0">
      <div className="sticky top-32 rounded-lg bg-surface-container-lowest p-8 shadow-[0_4px_40px_rgba(23,22,21,0.04)]">
        <h2 className="mb-8 border-b border-surface-variant pb-4 font-headline-lg text-headline-lg text-primary">
          Order Summary
        </h2>
        <div className="mb-4 flex items-center justify-between font-body-md text-on-surface-variant">
          <span>Subtotal</span>
          <span>{formattedTotal}</span>
        </div>
        <div className="mb-6 flex items-center justify-between font-body-md text-on-surface-variant">
          <span>Shipping</span>
          <span>Complimentary</span>
        </div>
        <div className="mb-8 flex items-end justify-between border-t border-surface-variant pt-6">
          <span className="font-headline-md text-headline-md text-primary">
            Total
          </span>
          <span className="font-headline-md text-headline-md text-primary">
            {formattedTotal}
          </span>
        </div>
        <button
          type="button"
          className="smooth-transition flex w-full items-center justify-center gap-2 bg-primary py-4 font-label-sm text-label-sm uppercase tracking-[0.1em] text-on-primary hover:bg-tertiary-container active:scale-[0.98]"
        >
          Proceed to Checkout
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
        <div className="mt-6 flex items-center justify-center gap-2 text-on-surface-variant opacity-70">
          <span className="material-symbols-outlined text-sm">lock</span>
          <span className="font-label-sm text-xs">Secure Checkout Provided</span>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
