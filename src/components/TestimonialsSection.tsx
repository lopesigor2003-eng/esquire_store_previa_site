import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS, STORE_CONTACT } from '../data/storeData';
import { useInView } from '../hooks/useInView';

export default function TestimonialsSection() {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      aria-label="Avaliações Públicas da Loja"
      className="py-16 lg:py-24 bg-[#0A0F2F] text-[#F7F8F7] border-b border-[#F7F8F7]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Reveal Animation */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#F7F8F7]/10 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#F6A70D] mb-2">
              Avaliações Públicas · Google Maps
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F7F8F7] tracking-tight">
              A Opinião de Quem Já Comprou
            </h2>

            <p className="text-sm sm:text-base text-[#F7F8F7]/80 mt-2 max-w-xl">
              Depoimentos reais e verificados deixados por clientes que retiraram seus aparelhos em nossa loja.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-[#F7F8F7] font-bold">
              <div className="flex text-[#F6A70D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F6A70D]" />
                ))}
              </div>
              <span>5.0 / 5.0 no Google (28 Avaliações)</span>
            </div>
            <a
              href={STORE_CONTACT.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F6A70D] hover:underline inline-flex items-center gap-1 transition-colors"
            >
              <span>Ver no Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Testimonials Grid with Staggered Entrance & Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((review, rIdx) => (
            <article
              key={review.id}
              style={{ transitionDelay: `${rIdx * 100}ms` }}
              className={`p-6 sm:p-7 rounded-xl bg-[#0F1742] border border-[#F7F8F7]/10 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#F6A70D]/40 hover:shadow-lg hover:shadow-[#F6A70D]/5 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-1 text-[#F6A70D]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F6A70D]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#F7F8F7]/60 font-mono">
                    {review.date}
                  </span>
                </div>

                {/* Review Comment */}
                <p className="text-sm text-[#F7F8F7]/90 leading-relaxed mb-6 font-normal">
                  "{review.comment}"
                </p>
              </div>

              {/* Review Author Footnote */}
              <div className="pt-3 border-t border-[#F7F8F7]/5 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-[#F7F8F7] block font-semibold">{review.author}</strong>
                  <span className="text-[#F7F8F7]/60 text-[11px]">{review.city}</span>
                </div>
                {review.productMentioned && (
                  <span className="text-[11px] text-[#F6A70D] bg-[#0A0F2F] px-2.5 py-1 rounded border border-[#F6A70D]/20 font-mono">
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
