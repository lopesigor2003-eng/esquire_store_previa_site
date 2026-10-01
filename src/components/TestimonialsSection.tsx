import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS, STORE_CONTACT } from '../data/storeData';

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      aria-label="Avaliações Públicas da Loja"
      className="py-16 lg:py-24 bg-[#070D1E] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Quiet Unboxed Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
              Avaliações Públicas · Google Maps
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Opinião de Quem Já Comprou
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              Depoimentos reais e verificados deixados por clientes que retiraram seus aparelhos em nossa loja.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-white font-bold">
              <div className="flex text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-white" />
                ))}
              </div>
              <span>5.0 / 5.0 no Google (28 Avaliações)</span>
            </div>
            <a
              href={STORE_CONTACT.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white underline inline-flex items-center gap-1"
            >
              <span>Ver no Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="p-6 sm:p-7 rounded-xl bg-[#0B1428] border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-1 text-white">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {review.date}
                  </span>
                </div>

                {/* Review Comment */}
                <p className="text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                  "{review.comment}"
                </p>
              </div>

              {/* Review Author Footnote */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-white block font-semibold">{review.author}</strong>
                  <span className="text-slate-400 text-[11px]">{review.city}</span>
                </div>
                {review.productMentioned && (
                  <span className="text-[11px] text-slate-300 bg-[#070D1E] px-2.5 py-1 rounded border border-white/10 font-mono">
                    {review.productMentioned}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
